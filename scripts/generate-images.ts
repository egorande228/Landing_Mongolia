import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import OpenAI, { toFile } from "openai";
import { mongoliaImageSlots } from "../content/mongolia-image-slots";

type ImageQuality = "low" | "medium" | "high" | "auto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const publicRoot = path.join(repoRoot, "public");
const force = process.argv.includes("--force");
const model = process.env.IMAGE_MODEL ?? "gpt-image-2";
const fallbackSize = process.env.IMAGE_SIZE;
const quality = process.env.IMAGE_QUALITY as ImageQuality | undefined;

const mimeByExtension: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
};

const exists = async (targetPath: string) => {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
};

const getMimeType = (filePath: string) =>
  mimeByExtension[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";

const getReferenceImages = async (referenceImagePaths: string[] = []) => {
  const images = [];

  for (const referenceImagePath of referenceImagePaths) {
    const absolutePath = path.resolve(repoRoot, referenceImagePath);

    if (!(await exists(absolutePath))) {
      continue;
    }

    const data = await fs.readFile(absolutePath);
    images.push(
      await toFile(data, path.basename(absolutePath), {
        type: getMimeType(absolutePath),
      }),
    );
  }

  return images;
};

const buildPrompt = (slot: (typeof mongoliaImageSlots)[number]) =>
  [
    slot.prompt,
    `Mood: ${slot.mood}.`,
    `Color palette: ${slot.colorPalette}.`,
    `Mongolia cues: ${slot.mongoliaCues.join(", ")}.`,
    `Crop safety: ${slot.cropSafety}.`,
    `Overlay safe zone: ${slot.textOverlaySafeZone}.`,
    `Reference direction: ${slot.referenceContentDirection}.`,
    `Avoid: ${slot.negativePrompt}.`,
  ].join(" ");

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log("Skipping image generation because OPENAI_API_KEY is not set.");
    return;
  }

  const client = new OpenAI({ apiKey });
  let failures = 0;

  for (const slot of mongoliaImageSlots) {
    const outputPath = path.join(publicRoot, slot.targetPath.replace(/^\//, ""));

    if (!force && (await exists(outputPath))) {
      console.log(`Skipping ${slot.id} because the file already exists.`);
      continue;
    }

    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    try {
      const referenceImages = await getReferenceImages(slot.referenceImagePaths);
      const baseParams = {
        model,
        prompt: buildPrompt(slot),
        size: fallbackSize ?? slot.generatedSize,
        output_format: "png" as const,
        ...(quality ? { quality } : {}),
      };

      const response =
        referenceImages.length > 0
          ? await client.images.edit({
              ...baseParams,
              image:
                referenceImages.length === 1 ? referenceImages[0] : referenceImages,
            })
          : await client.images.generate(baseParams);

      const imageData = response.data?.[0]?.b64_json;

      if (!imageData) {
        throw new Error("No image data returned from the API.");
      }

      await fs.writeFile(outputPath, Buffer.from(imageData, "base64"));
      console.log(`Generated ${slot.id} -> ${slot.targetPath}`);
    } catch (error) {
      failures += 1;
      console.error(
        `Failed ${slot.id}:`,
        error instanceof Error ? error.message : error,
      );
    }
  }

  if (failures > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("Image generation failed to start:", error);
  process.exitCode = 1;
});

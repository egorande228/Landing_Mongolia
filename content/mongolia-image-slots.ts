import type { MongoliaLocale } from "../config/mongolia.globals";

export type ImageSlotId =
  | "home-casino-discovery"
  | "home-slots"
  | "home-live-games"
  | "home-football"
  | "home-live-match"
  | "home-welcome-offer"
  | "home-gifts"
  | "partnership-partner-route"
  | "partnership-agent-route";

export type ImageSlotDefinition = {
  id: ImageSlotId;
  page: "home" | "partnership" | "faq";
  section: string;
  targetPath: string;
  ratio: string;
  generatedSize: string;
  fit: "cover" | "contain";
  alt: Record<MongoliaLocale, string>;
  mood: string;
  colorPalette: string;
  mongoliaCues: string[];
  cropSafety: string;
  textOverlaySafeZone: string;
  referenceContentDirection: string;
  prompt: string;
  negativePrompt: string;
  referenceImagePaths?: string[];
};

export const mongoliaImageSlots: ImageSlotDefinition[] = [
  {
    id: "home-casino-discovery",
    page: "home",
    section: "games",
    targetPath: "/player/games/casino.webp",
    ratio: "4 / 3",
    generatedSize: "1024x1024",
    fit: "cover",
    alt: {
      en: "Immersive casino discovery scene with roulette lighting and premium red surfaces.",
      mn: "Рулет, алтлаг гэрэлтэй казиноны нээлттэй орон зайн дүрслэл.",
    },
    mood: "Immersive and welcoming casino discovery.",
    colorPalette: "Dark red, black, brushed gold.",
    mongoliaCues: ["warm lacquer red", "soft gold edge lighting"],
    cropSafety: "Center the table and chips; avoid important details near corners.",
    textOverlaySafeZone: "Keep the lower-right quarter calm for text badges.",
    referenceContentDirection:
      "Discovery card for casino variety, immersive rather than literal product UI.",
    prompt:
      "Generate a premium casino discovery artwork for a dark Mongolia landing page. Show an elegant roulette and card-table atmosphere with red lacquer surfaces, gold highlights, subtle ambient haze, and a polished cinematic crop for a 4:3 card. Make it immersive, upscale, and mobile-friendly. No text or logos.",
    negativePrompt:
      "no text, no logos, no cheap neon rainbow palette, no busy crowd, no distorted hands, no overexposed lights",
  },
  {
    id: "home-slots",
    page: "home",
    section: "games",
    targetPath: "/player/games/slots.webp",
    ratio: "4 / 3",
    generatedSize: "1024x1024",
    fit: "cover",
    alt: {
      en: "Luxury slots artwork with glowing reels and gold sparks.",
      mn: "Алтлаг оч, гэрэлтсэн хүрдтэй слотын тансаг дүрслэл.",
    },
    mood: "Fast, bright, rewarding slots energy.",
    colorPalette: "Crimson shadow with warm gold glow.",
    mongoliaCues: ["gold sparks", "controlled ruby tones"],
    cropSafety: "Keep the reel cluster centered and avoid edge-cut symbols.",
    textOverlaySafeZone: "Reserve the top-right for light overlay text.",
    referenceContentDirection:
      "Slots-focused feature card with clear central subject and atmospheric lighting.",
    prompt:
      "Create a refined slots artwork for a premium Mongolia betting landing page. Feature glowing slot reels, gold sparks, rich dark red shadows, and a sleek cinematic 3D look. Keep the composition centered and clean for a card overlay, with no text and no logos.",
    negativePrompt:
      "no text, no logos, no childish coins explosion, no washed-out background, no crowded grid of machines",
  },
  {
    id: "home-live-games",
    page: "home",
    section: "games",
    targetPath: "/player/games/table.webp",
    ratio: "4 / 3",
    generatedSize: "1024x1024",
    fit: "cover",
    alt: {
      en: "Live games scene with dealer lighting and deep premium atmosphere.",
      mn: "Амьд тоглоомын тайз, дилерийн гэрэлтүүлэгтэй премиум орчин.",
    },
    mood: "Live-table confidence and premium intimacy.",
    colorPalette: "Midnight black, red velvet, warm gold edge light.",
    mongoliaCues: ["velvet red", "controlled spotlight glow"],
    cropSafety: "Keep the dealer zone mid-frame and avoid face crops at the edges.",
    textOverlaySafeZone: "Leave the bottom-left slightly quieter for labels.",
    referenceContentDirection:
      "Live games card that feels upscale and personal without embedded UI.",
    prompt:
      "Generate a live casino artwork for a Mongolia landing page with premium dark red and gold styling. Show a sophisticated live-table atmosphere with polished chips, soft spotlight glow, and a realistic cinematic feel. Composition should be card-friendly and crop-safe. No text or logos.",
    negativePrompt:
      "no text, no logos, no crowd scene, no cheap webcam aesthetic, no harsh blue lighting, no awkward anatomy",
  },
  {
    id: "home-football",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/lead.webp",
    ratio: "5 / 6",
    generatedSize: "1024x1536",
    fit: "cover",
    alt: {
      en: "Football action moment with red-gold stadium lighting.",
      mn: "Улаан, алтлаг цэнгэлдэхийн гэрэлтэй хөлбөмбөгийн оргил мөч.",
    },
    mood: "Explosive match-night momentum.",
    colorPalette: "Black-red stadium with warm gold flares.",
    mongoliaCues: ["night-steppe energy", "disciplined gold beams"],
    cropSafety: "Keep the main athlete centered with generous edge safety.",
    textOverlaySafeZone: "Reserve the upper-left for short badge overlays.",
    referenceContentDirection:
      "Lead football card for sports discovery with strong vertical framing.",
    prompt:
      "Create a premium football action artwork for a Mongolia sports betting landing page. Show one decisive match moment in a dramatic dark red stadium with warm gold floodlights, realistic motion, and a cinematic portrait crop. Keep it elegant and high-end. No text, no logos.",
    negativePrompt:
      "no text, no brand marks, no messy crowd closeups, no exaggerated comic style, no clipping at the frame edges",
  },
  {
    id: "home-live-match",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/football.webp",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Live match dashboard-style sports scene with bright score energy.",
      mn: "Амьд тоглолтын хэмнэлтэй, онооны эрч мэдрүүлэх спортын дүрслэл.",
    },
    mood: "Fast, tactical, live-board intensity.",
    colorPalette: "Dark maroon, black, controlled gold signal glow.",
    mongoliaCues: ["signal gold accents", "disciplined live-board atmosphere"],
    cropSafety: "Center the field or board lighting and keep corners uncluttered.",
    textOverlaySafeZone: "Leave the right side calmer for UI overlays if needed.",
    referenceContentDirection:
      "Wide live-match card that supports text and stat overlays without embedded text.",
    prompt:
      "Generate a wide premium live sports betting artwork for Mongolia. Blend the feeling of a live match board with a football arena atmosphere, using a dark red-black palette, warm gold signal lights, and elegant depth. The scene should feel modern and conversion-friendly, with room for overlays. No text or logos.",
    negativePrompt:
      "no text, no brand logos, no overcrowded interface, no flat gradient, no distorted players, no noisy neon",
  },
  {
    id: "home-welcome-offer",
    page: "home",
    section: "offers",
    targetPath: "/offer/welcome.webp",
    ratio: "4 / 3",
    generatedSize: "1024x1024",
    fit: "contain",
    alt: {
      en: "Welcome offer artwork with premium gift energy and gold glow.",
      mn: "Алтлаг гэрэлтэй, угтах урамшууллын бэлгийн дүрслэл.",
    },
    mood: "Inviting welcome reward.",
    colorPalette: "Dark red stage with luminous gold accents.",
    mongoliaCues: ["gift-box drama", "clean premium shine"],
    cropSafety: "Keep the main reward object centered with open margins.",
    textOverlaySafeZone: "Leave space above and to the left for copy.",
    referenceContentDirection:
      "Offer art for welcome promo with one strong object and simple composition.",
    prompt:
      "Create a premium welcome-offer artwork for a Mongolia betting landing page. Use a dark red-black base with warm gold highlights, refined gift or reward symbolism, and clean premium composition suitable for a 4:3 card. No text, no logos, no numbers.",
    negativePrompt:
      "no text, no logos, no coupon labels, no dollar symbols, no childish celebration clutter, no flat icon style",
  },
  {
    id: "home-gifts",
    page: "home",
    section: "offers",
    targetPath: "/offer/gifts.webp",
    ratio: "4 / 3",
    generatedSize: "1024x1024",
    fit: "contain",
    alt: {
      en: "Rewards and gifts scene with elegant premium glow.",
      mn: "Тансаг алтлаг туяатай шагнал, бэлгийн дүрслэл.",
    },
    mood: "Reward-driven but controlled.",
    colorPalette: "Crimson haze, deep shadow, gold rim light.",
    mongoliaCues: ["soft lacquer red", "gold-trimmed reward objects"],
    cropSafety: "Keep the central object and sparks away from outer edges.",
    textOverlaySafeZone: "Reserve the lower-left quadrant for supporting text.",
    referenceContentDirection:
      "Reward card with premium object-led composition, not literal badge art.",
    prompt:
      "Generate a refined rewards-and-gifts artwork for Mongolia with a premium casino feel. Use elegant reward objects, gold shimmer, deep red atmosphere, and a polished dark luxury composition that works in a 4:3 card. No text or logos.",
    negativePrompt:
      "no text, no brand logos, no giant numeric callouts, no toy-like props, no messy confetti overload",
  },
  {
    id: "partnership-partner-route",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/partner.webp",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Partner route visual focused on promotion, audience growth, and campaign energy.",
      mn: "Сурталчилгаа, олон нийтийн өсөлтөд төвлөрсөн түншийн дүрслэл.",
    },
    mood: "Promotion and audience momentum.",
    colorPalette: "Dark ruby background with gold accents.",
    mongoliaCues: ["campaign glow", "high-end media energy"],
    cropSafety: "Keep the central promotional objects away from edges.",
    textOverlaySafeZone: "Leave the right third calmer for route copy.",
    referenceContentDirection:
      "Route card visual for promoters, creators, and audience-led partners.",
    prompt:
      "Create a premium partner-route artwork for Mongolia that suggests audience promotion, campaign reach, and creator momentum. Use dark red-black depth, warm gold accents, and a sophisticated cinematic composition suitable for a wide route card. No text or logos.",
    negativePrompt:
      "no text, no logos, no social media icons, no cheap influencer clichés, no chaotic collage",
  },
  {
    id: "partnership-agent-route",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/agent.webp",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Agent route visual focused on local support and transaction trust.",
      mn: "Орон нутгийн дэмжлэг, гүйлгээний итгэлцэлд төвлөрсөн агентын дүрслэл.",
    },
    mood: "Reliable, local, practical.",
    colorPalette: "Dark crimson, black, soft gold guidance light.",
    mongoliaCues: ["local support presence", "measured gold highlights"],
    cropSafety: "Keep the service focal point centered with calm edges.",
    textOverlaySafeZone: "Leave the left third clearer for route copy.",
    referenceContentDirection:
      "Route card visual for local agents handling support and transactions.",
    prompt:
      "Generate a premium agent-route artwork for Mongolia that conveys local support, operational trust, and smooth transaction handling. Use a serious dark red-black palette with warm gold guidance lights, polished realistic or 3D surfaces, and a clear wide-card composition. No text or logos.",
    negativePrompt:
      "no text, no logos, no money stacks cliché, no banking app screenshot, no cluttered crowd scene",
  },
];

export const mongoliaImageSlotMap = Object.fromEntries(
  mongoliaImageSlots.map((slot) => [slot.id, slot]),
) as Record<ImageSlotId, ImageSlotDefinition>;

export const getImageSlot = (id: ImageSlotId) => mongoliaImageSlotMap[id];

const enabledImageSlots = new Set<ImageSlotId>([
  "home-casino-discovery",
  "home-slots",
  "home-live-games",
  "home-football",
  "home-live-match",
  "home-welcome-offer",
  "home-gifts",
  "partnership-partner-route",
  "partnership-agent-route",
]);

export const getLocalizedImageAsset = (
  id: ImageSlotId,
  locale: MongoliaLocale,
) => {
  const slot = getImageSlot(id);

  return {
    alt: slot.alt[locale],
    fit: slot.fit,
    ratio: slot.ratio,
    src: enabledImageSlots.has(id) ? slot.targetPath : undefined,
  };
};

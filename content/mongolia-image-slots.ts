import type { MongoliaLocale } from "../config/mongolia.globals";

export type ImageSlotId =
  | "home-hero-stage"
  | "home-casino-discovery"
  | "home-slots"
  | "home-live-games"
  | "home-football"
  | "home-live-match"
  | "home-welcome-offer"
  | "home-gifts"
  | "home-final-cta"
  | "partnership-hero"
  | "partnership-benefits"
  | "partnership-tools"
  | "partnership-partner-route"
  | "partnership-agent-route"
  | "partnership-final-cta"
  | "faq-support";

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
    id: "home-hero-stage",
    page: "home",
    section: "hero",
    targetPath: "/player/hero/hero.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Premium Mongolia-themed sports and casino stage with warm gold lighting.",
      mn: "Улаан, алтлаг өнгөтэй спорт ба казиноны тайз хэлбэрийн дүрслэл.",
    },
    mood: "Bold premium launch energy with stadium and casino depth.",
    colorPalette: "Dark black-red base with controlled warm gold highlights.",
    mongoliaCues: ["deep red lacquer", "gold flare", "steppe-night depth"],
    cropSafety: "Keep hero subject centered with clean edges for responsive crops.",
    textOverlaySafeZone: "Leave the left third quieter for headline overlap if reused.",
    referenceContentDirection:
      "Editorial hero stage for player discovery, not a literal app screenshot.",
    prompt:
      "Create a cinematic premium betting and casino hero scene for Mongolia. Use a dark ink-black and deep red environment with warm gold atmospheric glows, subtle stadium light beams, elegant gaming table reflections, and a sense of fast mobile access. Composition should feel polished, realistic or premium 3D, with one strong focal cluster and clean breathing room on the left side. No text, no logos, no UI labels.",
    negativePrompt:
      "no text, no brand logos, no cluttered collage, no cartoon look, no cropped faces at edges, no low-resolution blur, no flat red-yellow gradient background",
  },
  {
    id: "home-casino-discovery",
    page: "home",
    section: "games",
    targetPath: "/player/games/casino.png",
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
    targetPath: "/player/games/slots.png",
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
    targetPath: "/player/games/table.png",
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
    targetPath: "/player/sports/lead.png",
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
    targetPath: "/player/sports/football.png",
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
    targetPath: "/offer/welcome.png",
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
    targetPath: "/offer/gifts.png",
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
    id: "home-final-cta",
    page: "home",
    section: "final-cta",
    targetPath: "/offer/mongolia-final-cta.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Mobile-first betting scene with gold glow and clean CTA space.",
      mn: "Гар утасны төвтэй, CTA зайтай спорт-кaзино дүрслэл.",
    },
    mood: "Confident close with mobile immediacy.",
    colorPalette: "Deep black-red with golden mobile highlights.",
    mongoliaCues: ["premium mobile glow", "disciplined red lacquer frame"],
    cropSafety: "Keep the device and hero object in the center third.",
    textOverlaySafeZone: "Leave the left half clean for CTA copy.",
    referenceContentDirection:
      "Final player CTA visual with mobile access energy and overlay-safe composition.",
    prompt:
      "Create a wide premium final-CTA artwork for a Mongolia betting landing page. Focus on elegant mobile access, warm gold reflections, and a dark red-black premium atmosphere with clean space for copy on the left. No text, no logos, no fake interface labels.",
    negativePrompt:
      "no text, no logos, no cluttered UI, no cartoon devices, no harsh cyan lighting, no broken perspective",
  },
  {
    id: "partnership-hero",
    page: "partnership",
    section: "hero",
    targetPath: "/partnership/mongolia-partner-hero.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Partnership stage with operational trust and premium dashboard energy.",
      mn: "Түншлэлийн итгэлцэл, ажиллагааны эрчтэй тайз хэлбэрийн дүрслэл.",
    },
    mood: "Operational confidence and growth.",
    colorPalette: "Black-red base with focused gold dashboard light.",
    mongoliaCues: ["measured gold signals", "serious premium depth"],
    cropSafety: "Center the key stage objects and keep margins clean.",
    textOverlaySafeZone: "Reserve the left side for hero copy.",
    referenceContentDirection:
      "Editorial partnership hero that communicates trust, tools, and growth.",
    prompt:
      "Generate a premium partnership hero artwork for a Mongolia market landing page. Convey operational trust, growth tools, and high-end support using a dark red-black environment with focused gold dashboard glows, elegant desk or board depth, and a clean editorial composition. No text or logos.",
    negativePrompt:
      "no text, no brand marks, no corporate stock-photo smiles, no low-end office look, no cluttered charts",
  },
  {
    id: "partnership-benefits",
    page: "partnership",
    section: "benefits",
    targetPath: "/partnership/tools.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Support-focused partnership visual with premium service cues.",
      mn: "Түншийн дэмжлэг, үйлчилгээний уур амьсгалтай дүрслэл.",
    },
    mood: "Supportive, serious, and steady.",
    colorPalette: "Dark maroon, graphite black, gold edges.",
    mongoliaCues: ["service glow", "structured desk atmosphere"],
    cropSafety: "Keep the focal service objects centered and unobstructed.",
    textOverlaySafeZone: "Leave the right edge calmer for text overlays.",
    referenceContentDirection:
      "Benefit-side visual that suggests manager support, materials, and tracking.",
    prompt:
      "Create a premium support-and-benefits artwork for a Mongolia partnership page. Use a serious dark red and black base with elegant gold edges, polished workspace cues, and a trustworthy cinematic style that suggests guidance, materials, and performance tracking. No text or logos.",
    negativePrompt:
      "no text, no logos, no generic business handshake, no bright white office, no noisy composition",
  },
  {
    id: "partnership-tools",
    page: "partnership",
    section: "tools",
    targetPath: "/partnership/mongolia-tools.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Tools and dashboard style partnership visual with gold signal lighting.",
      mn: "Алтлаг дохиололтой, хэрэгсэл ба хяналтын самбарын дүрслэл.",
    },
    mood: "Measured dashboard sophistication.",
    colorPalette: "Dark red-black with controlled amber highlights.",
    mongoliaCues: ["signal glow", "clean tool focus"],
    cropSafety: "Keep the main dashboard or device centered with edge safety.",
    textOverlaySafeZone: "Reserve the left half for supporting copy.",
    referenceContentDirection:
      "Tools showcase art that feels operational, not like a literal UI screenshot.",
    prompt:
      "Generate a premium tools-showcase artwork for a Mongolia partnership landing page. Suggest performance tracking, manager support, and marketing tools through elegant dashboard-like lighting, dark red-black surfaces, and warm gold details. Realistic or premium 3D style, no text or logos.",
    negativePrompt:
      "no text, no logos, no literal spreadsheet screenshot, no neon cyberpunk overload, no clutter",
  },
  {
    id: "partnership-partner-route",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/partner.png",
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
    targetPath: "/partnership/agent.png",
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
  {
    id: "partnership-final-cta",
    page: "partnership",
    section: "final-cta",
    targetPath: "/partnership/mongolia-final-cta.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Premium contact-oriented partnership close with warm gold glow.",
      mn: "Алтлаг туяатай, холбоо барихад чиглэсэн түншлэлийн төгсгөлийн дүрслэл.",
    },
    mood: "Confident close and next-step clarity.",
    colorPalette: "Dark red-black with strong gold focal glow.",
    mongoliaCues: ["clear close", "premium communication energy"],
    cropSafety: "Keep the central visual cluster away from the left copy zone.",
    textOverlaySafeZone: "Leave the left half clean for CTA copy and buttons.",
    referenceContentDirection:
      "Final partnership CTA visual designed for contact and onboarding urgency.",
    prompt:
      "Create a premium final partnership CTA artwork for Mongolia with dark red-black depth, focused gold glow, and a strong sense of direct contact and next-step momentum. The composition should support overlay copy on the left and remain elegant, serious, and mobile-safe. No text or logos.",
    negativePrompt:
      "no text, no brand marks, no call center cliché, no bright white office scene, no crowded layout",
  },
  {
    id: "faq-support",
    page: "faq",
    section: "support",
    targetPath: "/support/mongolia-faq.png",
    ratio: "16 / 10",
    generatedSize: "1536x1024",
    fit: "cover",
    alt: {
      en: "Support visual with premium calm lighting and clear help atmosphere.",
      mn: "Тайван алтлаг гэрэлтэй, тусламжийн уур амьсгалтай дүрслэл.",
    },
    mood: "Calm support and clarity.",
    colorPalette: "Muted dark red-black with soft gold warmth.",
    mongoliaCues: ["calm signal glow", "structured premium support tone"],
    cropSafety: "Keep the central support element broad and stable.",
    textOverlaySafeZone: "Leave the left side open for support CTA copy.",
    referenceContentDirection:
      "FAQ support visual that feels reassuring and premium rather than promotional.",
    prompt:
      "Generate a premium support artwork for a Mongolia FAQ page. Use a dark red-black background, soft gold warmth, and a calm polished composition that communicates help, clarity, and fast support without embedded text or logos.",
    negativePrompt:
      "no text, no logos, no generic headset stock photo, no cluttered interfaces, no oversaturated neon",
  },
];

export const mongoliaImageSlotMap = Object.fromEntries(
  mongoliaImageSlots.map((slot) => [slot.id, slot]),
) as Record<ImageSlotId, ImageSlotDefinition>;

export const getImageSlot = (id: ImageSlotId) => mongoliaImageSlotMap[id];

const enabledImageSlots = new Set<ImageSlotId>([
  "home-hero-stage",
  "home-casino-discovery",
  "home-slots",
  "home-live-games",
  "home-football",
  "home-live-match",
  "home-welcome-offer",
  "home-gifts",
  "partnership-benefits",
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

export type MongoliaLocale = "en" | "mn";

export type HomeSectionKey =
  | "hero"
  | "games"
  | "sports"
  | "offers"
  | "finalCta";

export type PartnershipSectionKey =
  | "hero"
  | "benefits"
  | "steps"
  | "paths"
  | "tools"
  | "finalCta";

export type NavKey =
  | "home"
  | "games"
  | "sports"
  | "offers"
  | "partnership"
  | "faq"
  | "contact";

export type NavItem = {
  key: NavKey;
  href: string;
  audience: "global" | "player" | "business";
};

export const mongoliaGlobals = {
  market: "Mongolia",
  slug: "mongolia",
  locales: ["en", "mn"] as const,
  defaultLocale: "en" as const,
  directionByLocale: {
    en: "ltr",
    mn: "ltr",
  } as Record<MongoliaLocale, "ltr" | "rtl">,
  themeFamily: "gold-classic",
  backgroundVariant: "bg-premium-minimal",
  composition: {
    home: {
      density: "editorial",
      textMeasure: "md",
      surfaceMode: "accent-led",
      motionProfile: "subtle",
    },
    partnership: {
      density: "balanced",
      textMeasure: "sm",
      surfaceMode: "restrained-mix",
      motionProfile: "subtle",
    },
    faq: {
      density: "balanced",
      textMeasure: "sm",
      surfaceMode: "glass-dominant",
      motionProfile: "subtle",
    },
  },
  chrome: {
    homeAnchors: ["#top", "#games", "#sports", "#offers", "#contact"],
    partnershipAnchors: [
      "#top",
      "#benefits",
      "#steps",
      "#paths",
      "#tools",
      "#final-cta",
    ],
    nav: [
      { key: "home", href: "/", audience: "global" },
      { key: "games", href: "/#games", audience: "player" },
      { key: "sports", href: "/#sports", audience: "player" },
      { key: "offers", href: "/#offers", audience: "player" },
      { key: "partnership", href: "/partnership", audience: "business" },
      { key: "faq", href: "/faq", audience: "global" },
      { key: "contact", href: "/#contact", audience: "global" },
    ] satisfies NavItem[],
  },
  sizing: {
    home: {
      containerWidth: 1180,
      containerX: "clamp(1rem, 2.8vw, 2rem)",
      sectionY: "clamp(3.5rem, 6.4vw, 5.2rem)",
      sectionYMobile: "2.75rem",
      heroTop: "clamp(4.8rem, 10vw, 7rem)",
      heroBottom: "clamp(3.6rem, 7vw, 5.2rem)",
      gridGap: "clamp(1rem, 2vw, 1.4rem)",
      cardPadding: "clamp(1.1rem, 2.2vw, 1.5rem)",
      buttonMinHeight: "3.25rem",
    },
    partnership: {
      containerWidth: 1120,
      containerX: "clamp(1rem, 2.6vw, 1.85rem)",
      sectionY: "clamp(2.8rem, 5.8vw, 4.2rem)",
      sectionYMobile: "2.4rem",
      heroTop: "clamp(4.4rem, 9vw, 6rem)",
      heroBottom: "clamp(3rem, 6vw, 4.6rem)",
      gridGap: "clamp(0.9rem, 1.8vw, 1.2rem)",
      cardPadding: "clamp(1rem, 2vw, 1.3rem)",
      buttonMinHeight: "3.125rem",
    },
  },
  pages: {
    home: {
      enabledSections: [
        "hero",
        "games",
        "sports",
        "offers",
        "finalCta",
      ] satisfies HomeSectionKey[],
      variants: {
        hero: "home-hero-centered",
        games: "home-featured-grid",
        sports: "home-sports-showcase",
        offers: "home-offers-grid",
        finalCta: "final-cta-panel",
      },
    },
    partnership: {
      enabledSections: [
        "hero",
        "benefits",
        "steps",
        "paths",
        "tools",
        "finalCta",
      ] satisfies PartnershipSectionKey[],
      variants: {
        hero: "hero-editorial",
        benefits: "benefits-dashboard",
        steps: "steps-timeline",
        paths: "paths-dual-card",
        tools: "tools-showcase",
        finalCta: "final-cta-dual-card",
      },
    },
    faq: {
      enabledSections: ["intro", "playerFaq", "partnershipFaq", "supportCta"],
      variant: "faq-route",
    },
  },
} as const;

export type PageKind = keyof typeof mongoliaGlobals.pages;

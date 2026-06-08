import { Fragment } from "react";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { FaqSections } from "@/components/sections/faq/FaqSections";
import { BenefitsSection } from "@/components/sections/partnership/BenefitsSection";
import { PartnershipFinalCta } from "@/components/sections/partnership/PartnershipFinalCta";
import { PartnershipHero } from "@/components/sections/partnership/PartnershipHero";
import { PathsSection } from "@/components/sections/partnership/PathsSection";
import { StepsSection } from "@/components/sections/partnership/StepsSection";
import { ToolsSection } from "@/components/sections/partnership/ToolsSection";
import { GamesSection } from "@/components/sections/home/GamesSection";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { OffersSection } from "@/components/sections/home/OffersSection";
import { SportsSection } from "@/components/sections/home/SportsSection";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import type { MongoliaLocale, PageKind } from "@/config/mongolia.globals";
import { getMongoliaContent } from "@/content/markets/mongolia";

type LocalizedPageContentProps = {
  locale: MongoliaLocale;
  page: PageKind;
};

export function LocalizedPageContent({
  locale,
  page,
}: LocalizedPageContentProps) {
  const copy = getMongoliaContent(locale);

  switch (page) {
    case "home": {
      const sections = {
        hero: <HomeHero content={copy.home.hero} />,
        games: <GamesSection content={copy.home.games} locale={locale} />,
        sports: <SportsSection content={copy.home.sports} locale={locale} />,
        offers: <OffersSection content={copy.home.offers} locale={locale} />,
        finalCta: <HomeFinalCta content={copy.home.finalCta} locale={locale} />,
      };

      return (
        <MarketPageShell locale={locale} page="home">
          {mongoliaGlobals.pages.home.enabledSections.map((section) => (
            <Fragment key={section}>{sections[section]}</Fragment>
          ))}
        </MarketPageShell>
      );
    }

    case "partnership": {
      const sections = {
        hero: <PartnershipHero content={copy.partnership.hero} />,
        benefits: <BenefitsSection content={copy.partnership.benefits} />,
        steps: <StepsSection content={copy.partnership.steps} />,
        paths: <PathsSection content={copy.partnership.paths} locale={locale} />,
        tools: <ToolsSection content={copy.partnership.tools} />,
        finalCta: <PartnershipFinalCta content={copy.partnership.finalCta} />,
      };

      return (
        <MarketPageShell locale={locale} page="partnership">
          {mongoliaGlobals.pages.partnership.enabledSections.map((section) => (
            <Fragment key={section}>{sections[section]}</Fragment>
          ))}
        </MarketPageShell>
      );
    }

    case "faq":
      return (
        <MarketPageShell locale={locale} page="faq">
          <FaqSections content={copy.faq} />
        </MarketPageShell>
      );
  }
}

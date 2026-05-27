import { Fragment } from "react";
import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { GamesSection } from "@/components/sections/home/GamesSection";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { OffersSection } from "@/components/sections/home/OffersSection";
import { SportsSection } from "@/components/sections/home/SportsSection";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import { mongoliaContent } from "@/content/markets/mongolia";
import { getMongoliaContent } from "@/content/markets/mongolia";
import { resolveLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: mongoliaContent.en.seo.homeTitle,
  description: mongoliaContent.en.seo.homeDescription,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const copy = getMongoliaContent(locale);

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

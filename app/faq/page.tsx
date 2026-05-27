import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { FaqSections } from "@/components/sections/faq/FaqSections";
import { mongoliaContent } from "@/content/markets/mongolia";
import { getMongoliaContent } from "@/content/markets/mongolia";
import { resolveLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: mongoliaContent.en.seo.faqTitle,
  description: mongoliaContent.en.seo.faqDescription,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function FaqPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const copy = getMongoliaContent(locale);

  return (
    <MarketPageShell locale={locale} page="faq">
      <FaqSections content={copy.faq} />
    </MarketPageShell>
  );
}

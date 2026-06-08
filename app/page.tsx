import { Suspense } from "react";
import type { Metadata } from "next";
import { LocalizedPageClient } from "@/components/pages/LocalizedPageClient";
import { LocalizedPageContent } from "@/components/pages/LocalizedPageContent";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import { mongoliaContent } from "@/content/markets/mongolia";

export const metadata: Metadata = {
  title: mongoliaContent.en.seo.homeTitle,
  description: mongoliaContent.en.seo.homeDescription,
};

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <LocalizedPageContent
          locale={mongoliaGlobals.defaultLocale}
          page="home"
        />
      }
    >
      <LocalizedPageClient page="home" />
    </Suspense>
  );
}

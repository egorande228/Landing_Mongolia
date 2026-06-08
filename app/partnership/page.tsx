import { Suspense } from "react";
import type { Metadata } from "next";
import { LocalizedPageClient } from "@/components/pages/LocalizedPageClient";
import { LocalizedPageContent } from "@/components/pages/LocalizedPageContent";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import { mongoliaContent } from "@/content/markets/mongolia";

export const metadata: Metadata = {
  title: mongoliaContent.en.seo.partnershipTitle,
  description: mongoliaContent.en.seo.partnershipDescription,
};

export default function PartnershipPage() {
  return (
    <Suspense
      fallback={
        <LocalizedPageContent
          locale={mongoliaGlobals.defaultLocale}
          page="partnership"
        />
      }
    >
      <LocalizedPageClient page="partnership" />
    </Suspense>
  );
}

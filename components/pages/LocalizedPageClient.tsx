"use client";

import type { PageKind } from "@/config/mongolia.globals";
import { resolveLocale } from "@/lib/locale";
import { useSearchParams } from "next/navigation";
import { LocalizedPageContent } from "@/components/pages/LocalizedPageContent";

type LocalizedPageClientProps = {
  page: PageKind;
};

export function LocalizedPageClient({ page }: LocalizedPageClientProps) {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined);

  return <LocalizedPageContent locale={locale} page={page} />;
}

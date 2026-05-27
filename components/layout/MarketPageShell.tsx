import type { ReactNode, CSSProperties } from "react";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import { getMongoliaContent } from "@/content/markets/mongolia";
import { getDirection } from "@/lib/locale";
import { PageBackground } from "@/components/layout/PageBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type MarketPageShellProps = {
  children: ReactNode;
  locale: MongoliaLocale;
  page: "home" | "partnership" | "faq";
};

export function MarketPageShell({
  children,
  locale,
  page,
}: MarketPageShellProps) {
  const copy = getMongoliaContent(locale);
  const sizing =
    page === "partnership"
      ? mongoliaGlobals.sizing.partnership
      : mongoliaGlobals.sizing.home;

  const style = {
    "--container-width": `${sizing.containerWidth}px`,
    "--section-y": sizing.sectionY,
    "--section-y-mobile": sizing.sectionYMobile,
    "--container-x": sizing.containerX,
    "--grid-gap": sizing.gridGap,
    "--card-padding": sizing.cardPadding,
    "--button-min-height": sizing.buttonMinHeight,
  } as CSSProperties;

  return (
    <div
      className="app-shell"
      data-page={page}
      dir={getDirection(locale)}
      lang={locale}
      style={style}
    >
      <PageBackground page={page} />
      <SiteHeader
        activePage={page}
        cta={copy.chrome.headerCta}
        locale={locale}
        navLabels={copy.nav}
      />
      <main className="page-main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}

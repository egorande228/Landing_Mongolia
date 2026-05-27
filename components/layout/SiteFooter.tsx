import Link from "next/link";
import { MongoliaLogo } from "@/components/brand/MongoliaLogo";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import { getMongoliaContent } from "@/content/markets/mongolia";
import { withLocale } from "@/lib/locale";

type SiteFooterProps = {
  locale: MongoliaLocale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const copy = getMongoliaContent(locale);

  return (
    <footer className="footer-wrap">
      <div className="shell-container">
        <div className="footer-shell">
          <div className="footer-brand">
            <MongoliaLogo />
            <p className="type-body text-pretty text-[var(--color-foreground-soft)]">
              {copy.footer.brandLine}
            </p>
          </div>
          <div className="footer-grid">
            <div>
              <p className="footer-heading">{copy.footer.homeTitle}</p>
              <div className="footer-links">
                {copy.footer.homeLinks.map((link) => (
                  <Link href={withLocale(link.href, locale)} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-heading">{copy.footer.partnershipTitle}</p>
              <div className="footer-links">
                {copy.footer.partnershipLinks.map((link) => (
                  <Link href={withLocale(link.href, locale)} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-heading">{copy.footer.supportTitle}</p>
              <div className="footer-links">
                {copy.footer.supportLinks.map((link) => (
                  <Link href={withLocale(link.href, locale)} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-heading">{copy.footer.contactTitle}</p>
              <div className="footer-links">
                {copy.footer.contactLinks.map((link) => (
                  <a href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-legal">
            <p>{copy.footer.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

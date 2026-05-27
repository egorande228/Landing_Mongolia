"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import type { MongoliaLocale, NavKey } from "@/config/mongolia.globals";
import { MongoliaLogo } from "@/components/brand/MongoliaLogo";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";
import { withLocale } from "@/lib/locale";

type SiteHeaderProps = {
  locale: MongoliaLocale;
  navLabels: Record<NavKey, string>;
  cta: {
    label: string;
    href: string;
  };
  activePage: "home" | "partnership" | "faq";
};

const mobileNavKeys = new Set<NavKey>(["home", "partnership", "faq"]);

export function SiteHeader({
  locale,
  navLabels,
  cta,
  activePage,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const topbarRevealStyle = (index: number) =>
    ({ "--topbar-index": index } as CSSProperties);
  const ctaHref = withLocale(cta.href, locale);

  const localeTargets = useMemo(() => {
    const current = pathname ?? "/";

    return mongoliaGlobals.locales.map((value) => ({
      value,
      href: withLocale(current, value),
    }));
  }, [pathname]);

  useEffect(() => {
    const closeMenu = () => {
      setOpen(false);
    };

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className="header-wrap">
      <div className="shell-container">
        <div className="header-shell">
          <Link
            aria-label="MELBET Mongolia"
            className="topbar-reveal-item"
            href={withLocale("/", locale)}
            onClick={() => setOpen(false)}
            style={topbarRevealStyle(0)}
          >
            <MongoliaLogo compact />
          </Link>
          <nav className="header-nav">
            {mongoliaGlobals.chrome.nav.map((item, index) => {
              const href = withLocale(item.href, locale);
              const isActive =
                (activePage === "home" && item.key === "home") ||
                (activePage === "partnership" && item.key === "partnership") ||
                (activePage === "faq" && item.key === "faq");

              return (
                <Link
                  className={cn(
                    "header-nav__link",
                    "topbar-reveal-item",
                    isActive && "is-active",
                  )}
                  href={href}
                  key={item.key}
                  onClick={() => setOpen(false)}
                  style={topbarRevealStyle(index + 1)}
                >
                  {navLabels[item.key]}
                </Link>
              );
            })}
          </nav>
          <div className="header-actions">
            <div
              className="topbar-reveal-item hidden min-[980px]:inline-flex"
              style={topbarRevealStyle(
                mongoliaGlobals.chrome.nav.length + localeTargets.length + 1,
              )}
            >
              <CTAButton
                href={ctaHref}
                label={cta.label}
              />
            </div>
            <div className="ml-auto flex items-center gap-2 min-[980px]:hidden">
              <button
                aria-controls="topbar-mobile-menu"
                aria-expanded={open}
                aria-label="Toggle menu"
                className={cn(
                  "header-mobile-toggle",
                  "topbar-reveal-item",
                  open && "header-mobile-toggle--open",
                )}
                onClick={() => setOpen((value) => !value)}
                style={topbarRevealStyle(
                  mongoliaGlobals.chrome.nav.length + localeTargets.length + 2,
                )}
                type="button"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-[2px] h-px w-full bg-[currentColor] transition duration-300 ease-out",
                      open && "translate-y-[6px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[currentColor] transition duration-300 ease-out",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-[2px] left-0 h-px w-full bg-[currentColor] transition duration-300 ease-out",
                      open && "-translate-y-[6px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        {open ? (
          <div className="relative min-[980px]:hidden">
            <div className="header-menu" id="topbar-mobile-menu">
              <nav className="flex flex-col gap-2">
                {mongoliaGlobals.chrome.nav
                  .filter((item) => mobileNavKeys.has(item.key))
                  .map((item) => (
                    <Link
                      className="header-menu__link"
                      href={withLocale(item.href, locale)}
                      key={item.key}
                      onClick={() => setOpen(false)}
                    >
                      {navLabels[item.key]}
                    </Link>
                  ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3">
                <div className="locale-switch">
                  {localeTargets.map((target) => (
                    <Link
                      className={cn(
                        "locale-switch__item",
                        target.value === locale && "is-active",
                      )}
                      href={target.href}
                      key={target.value}
                      onClick={() => setOpen(false)}
                    >
                      {target.value.toUpperCase()}
                    </Link>
                  ))}
                </div>
                <CTAButton
                  className="w-full justify-center"
                  href={ctaHref}
                  label={cta.label}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

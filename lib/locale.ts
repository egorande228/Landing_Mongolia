import { mongoliaGlobals, type MongoliaLocale } from "@/config/mongolia.globals";

export const resolveLocale = (
  value?: string | string[] | undefined,
): MongoliaLocale => {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (candidate && mongoliaGlobals.locales.includes(candidate as MongoliaLocale)) {
    return candidate as MongoliaLocale;
  }

  return mongoliaGlobals.defaultLocale;
};

export const getDirection = (locale: MongoliaLocale) =>
  mongoliaGlobals.directionByLocale[locale];

export const withLocale = (href: string, locale: MongoliaLocale) => {
  const [base, hash] = href.split("#");
  const hasPath = base && base.length > 0 ? base : "/";
  const url = new URL(hasPath, "https://mongolia.local");

  if (locale === mongoliaGlobals.defaultLocale) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }

  return `${url.pathname}${url.search}${hash ? `#${hash}` : ""}`;
};

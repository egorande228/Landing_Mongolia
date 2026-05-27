import { getDirection } from "@/lib/locale";
import type { MongoliaLocale } from "@/config/mongolia.globals";

export const isRtl = (locale: MongoliaLocale) => getDirection(locale) === "rtl";

export const alignByDirection = (
  locale: MongoliaLocale,
  ltrClass: string,
  rtlClass: string,
) => (isRtl(locale) ? rtlClass : ltrClass);

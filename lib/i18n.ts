export const locales = ["en", "zh", "tr", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

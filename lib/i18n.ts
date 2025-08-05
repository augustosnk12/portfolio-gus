export const defaultLocale = "en"
export const locales = ["en", "pt", "es", "it"] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  it: "Italiano",
}

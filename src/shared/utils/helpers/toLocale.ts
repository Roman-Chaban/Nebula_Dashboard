import { Locale, LOCALES, SUPPORTED_LOCALES } from '@/shared/config/constants';

export const toLocale = (lang: string | undefined): Locale => {
  return lang && SUPPORTED_LOCALES.includes(lang as Locale) ? (lang as Locale) : LOCALES.EN;
};

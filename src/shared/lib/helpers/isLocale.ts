import { SUPPORTED_LOCALES, type Locale } from '@/shared/config/constants';

export const isLocale = (lang: string | undefined): lang is Locale => {
  return typeof lang === 'string' && SUPPORTED_LOCALES.includes(lang as Locale);
};

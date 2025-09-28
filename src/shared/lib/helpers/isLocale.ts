import { SUPPORTED_LOCALES, type Locale } from '@/shared/config/constants';

export const isLocale = (supportedLanguage: string | undefined): supportedLanguage is Locale => {
  return (
    typeof supportedLanguage === 'string' && SUPPORTED_LOCALES.includes(supportedLanguage as Locale)
  );
};

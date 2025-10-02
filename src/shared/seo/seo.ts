import en from '@/shared/locales/en.json';
import ua from '@/shared/locales/ua.json';

import { LOCALES } from '@/shared/config/constants';
import { SeoMetadata, SeoPageKeys } from '@/shared/seo/seo.types';

export function generateSeoMetadata(locale: string, page: SeoPageKeys): SeoMetadata {
  let translationKey;

  switch (locale) {
    case LOCALES.UA:
      translationKey = ua;
      break;
    case LOCALES.EN:
    default:
      translationKey = en;
      break;
  }

  const seo = translationKey.SEO[page];

  return {
    title: seo.title,
    description: seo.description,
  };
}

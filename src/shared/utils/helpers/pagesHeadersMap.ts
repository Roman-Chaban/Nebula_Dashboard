import { PAGE_HEADER_CONFIGS } from '@/shared/config/pagesHeaders';
import { LOCALES } from '@/shared/config/constants';

export const PAGE_HEADERS_MAP: Record<
  string,
  Record<string, { titleKey: string; subtitleKey: string }>
> = {};

Object.values(LOCALES).forEach((locale) => {
  PAGE_HEADER_CONFIGS.forEach((config) => {
    PAGE_HEADERS_MAP[locale] = PAGE_HEADERS_MAP[locale] || {};
    PAGE_HEADERS_MAP[locale][config.path] = {
      titleKey: config.titleKey,
      subtitleKey: config.subtitleKey,
    };
  });
});

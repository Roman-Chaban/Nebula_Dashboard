'use client';

import { useParams } from 'next/navigation';
import { sidebarNavItems as navItemsConfig } from '@/widgets/Sidebar/model/config';
import { LOCALES, type Locale } from '@/shared/config/constants';
import { isLocale } from '@/shared/lib/helpers/isLocale';

export function useSidebarNavItems() {
  const params = useParams();
  let localeParam = params?.locale;

  if (Array.isArray(localeParam)) localeParam = localeParam[0];

  const currentLocale: Locale = isLocale(localeParam) ? localeParam : LOCALES.EN;

  return navItemsConfig.map((item) => ({
    ...item,
    href: `/${currentLocale}${item.href.startsWith('/') ? item.href : '/' + item.href}`,
  }));
}

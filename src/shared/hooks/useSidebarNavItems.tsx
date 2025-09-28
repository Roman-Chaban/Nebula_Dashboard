'use client';

import { useParams } from 'next/navigation';
import { sidebarNavItems as navItemsConfig } from '@/widgets/Sidebar/model/config';
import { LOCALES, ROUTES, type Locale } from '@/shared/config/constants';
import { isLocale } from '@/shared/lib/helpers/isLocale';

const { HOME } = ROUTES;

export const useSidebarNavItems = () => {
  const params = useParams();
  let localeParam = params?.locale;

  if (Array.isArray(localeParam)) localeParam = localeParam[0];

  const currentLocale: Locale = isLocale(localeParam) ? localeParam : LOCALES.EN;

  return navItemsConfig.map((item) => ({
    ...item,
    href: `/${currentLocale}${item.href.startsWith(HOME) ? item.href : HOME + item.href}`,
  }));
};

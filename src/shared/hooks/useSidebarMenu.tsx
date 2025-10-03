'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import {
  sidebarNavItems as navItemsConfig,
  upsellCardInfo as upsellConfig,
} from '@/widgets/Sidebar/model/config';

import { LOCALES, ROUTES, type Locale } from '@/shared/config/constants';

import { isLocale } from '@/shared/lib/helpers/isLocale';

import type { NavItems, UpsellCardInfo, NavItem } from '@/widgets/Sidebar/model/types';

const { HOME } = ROUTES;

/**
 * useSidebarMenu
 *
 * Returns:
 *  - navItems: NavItems[] with localized href (locale prefix) and translated label (string)
 *  - upsellCardInfo: translated strings for the upsell card
 *  - currentLocale: active locale (useful for other components)
 *  - t: translation function (optional)
 */
export const useSidebarMenu = () => {
  const params = useParams();
  let localeParam = params?.locale;

  if (Array.isArray(localeParam)) localeParam = localeParam[0];

  const currentLocale: Locale = isLocale(localeParam) ? (localeParam as Locale) : LOCALES.EN;

  const { t } = useTranslation();

  const navItems: NavItems = useMemo(() => {
    return navItemsConfig.map<NavItem>((item) => {
      // Localize href: add /{locale} as prefix, considering HOME
      const normalizedHref = item.href.startsWith(HOME) ? item.href : HOME + item.href;
      const localizedHref = `/${currentLocale}${normalizedHref}`;

      return {
        ...item,
        href: localizedHref,
        // Return label as translated string (component receives final-ready string)
        label: t(item.label),
      };
    });
    // Dependencies: t and currentLocale — recalculate when they change
  }, [t, currentLocale]);

  const upsellCardInfo: UpsellCardInfo = useMemo(() => {
    return {
      ...upsellConfig,
      title: t(upsellConfig.title),
      primarySubtitle: t(upsellConfig.primarySubtitle),
      secondarySubtitle: t(upsellConfig.secondarySubtitle),
    };
  }, [t]);

  return {
    navItems,
    upsellCardInfo,
    currentLocale,
    t,
  } as const;
};

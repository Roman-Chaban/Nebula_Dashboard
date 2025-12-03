'use client';

import { ReactNode, useEffect } from 'react';
import { useParams } from 'next/navigation';
import i18n from '@/shared/i18n';
import { GlobalProviders } from '@/shared/providers';
import { LOCALES, type Locale } from '@/shared/config/constants';
import { isLocale } from '@/shared/utils/helpers/isLocale';

type LocaleLayoutProps = {
  children: ReactNode;
};

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  const params = useParams();
  let localeParam = params?.locale;

  if (Array.isArray(localeParam)) {
    localeParam = localeParam[0];
  }

  const locale: Locale = isLocale(localeParam) ? localeParam : LOCALES.EN;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <GlobalProviders>{children}</GlobalProviders>;
}

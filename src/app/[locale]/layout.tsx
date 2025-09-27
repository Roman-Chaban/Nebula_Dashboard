'use client';
import { ReactNode, useEffect } from 'react';
import { useParams } from 'next/navigation';
import i18n from '@/shared/i18n';
import { GlobalProviders } from '@/shared/providers';
import { LOCALES, type Locale } from '@/shared/config/constants';

const SUPPORTED_LOCALES: Locale[] = [LOCALES.EN, LOCALES.UA];

interface LocaleLayoutProps {
  children: ReactNode;
}

function isLocale(lang: unknown): lang is Locale {
  return typeof lang === 'string' && SUPPORTED_LOCALES.includes(lang as Locale);
}

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

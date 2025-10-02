'use client';

import { type FC } from 'react';
import { PageLayoutProps } from '@/entities/ui/page-layout/model/page-layout';
import { Container } from '@/shared/ui/Container/Container';
import { Header } from '@/widgets/Header/ui/Header';
import { PAGE_HEADERS_MAP } from '@/shared/utils/helpers/pagesHeadersMap';
import { usePathname, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { LOCALES, type Locale, ROUTES, SUPPORTED_LOCALES } from '@/shared/config/constants';

const { HOME } = ROUTES;

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname() || HOME;
  const params = useParams();

  let localeParam = params?.locale;
  if (Array.isArray(localeParam)) localeParam = localeParam[0];

  const locale: Locale = SUPPORTED_LOCALES.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : LOCALES.EN;

  let pathnameClean = pathname;
  SUPPORTED_LOCALES.forEach((locale) => {
    if (pathname.startsWith(`/${locale}`)) {
      pathnameClean = pathname.replace(`/${locale}`, '') || HOME;
    }
  });

  const { t } = useTranslation();

  const headers = PAGE_HEADERS_MAP[locale]?.[pathnameClean] ?? {
    titleKey: 'PAGE_HEADERS.default.title',
    subtitleKey: 'PAGE_HEADERS.default.subtitle',
  };

  return (
    <Container className="flex w-full flex-col gap-[29px] pt-12 pr-[22px] pb-7 pl-[20px]">
      <Header title={t(headers.titleKey)} subtitle={t(headers.subtitleKey)} />
      <main>{children}</main>
    </Container>
  );
};

import { NextRequest, NextResponse } from 'next/server';
import { SUPPORTED_LOCALES, ROUTES, type Locale } from '@/shared/config/constants';
import { toLocale } from '@/shared/utils/helpers/toLocale';

const { HOME, DASHBOARD } = ROUTES;

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  const firstSegment = pathname.split('/')[1];
  if (SUPPORTED_LOCALES.includes(firstSegment as Locale)) {
    return NextResponse.next();
  }

  const acceptLang = request.headers.get('accept-language') ?? '';
  const browserLocale = acceptLang.split(',')[0].split('-')[0];

  const locale: Locale = toLocale(browserLocale);

  if (pathname === HOME) {
    url.pathname = `/${locale}/${DASHBOARD}`;
  } else {
    url.pathname = `/${locale}${pathname}`;
  }

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};

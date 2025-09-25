import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from '@/shared/config/constants';

const { HOME, DASHBOARD } = ROUTES;

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === HOME) {
    url.pathname = DASHBOARD;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [HOME],
};

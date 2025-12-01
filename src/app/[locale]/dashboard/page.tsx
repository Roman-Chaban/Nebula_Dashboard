import { type Metadata } from 'next';

import { Locale, SEO_KEYS } from '@/shared/config/constants';
import { generateSeoMetadata } from '@/shared/seo/seo';
import { DashboardView } from '@/pages/dashboard/ui/DashboardView/DashboardView';

export type DashboardProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: DashboardProps): Promise<Metadata> {
  const { locale } = await params;

  return generateSeoMetadata(locale, SEO_KEYS.DASHBOARD);
}

export default function DashboardPage() {
  return <DashboardView />;
}

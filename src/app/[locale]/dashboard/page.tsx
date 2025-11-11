import { type Metadata } from 'next';

import { Container, PageLayout } from '@/shared/ui/index';
import { Earnings } from '@/widgets/Earnings/ui/Earnings';
import { Locale, SEO_KEYS } from '@/shared/config/constants';
import { generateSeoMetadata } from '@/shared/seo/seo';
import { Charts } from '@/widgets/Charts/ui/Charts';
import { CheckTable } from '@/widgets/CheckTable/ui/CheckTable';

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
  return (
    <PageLayout>
      <Container className="flex flex-col gap-5">
        <Earnings />
        <Charts />
        <CheckTable />
      </Container>
    </PageLayout>
  );
}

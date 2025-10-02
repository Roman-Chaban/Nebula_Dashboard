import { type Metadata } from 'next';

import { Container, PageLayout } from '@/shared/ui/index';
import { Earnings } from '@/widgets/Earnings/ui/Earnings';
import { Locale, SEO_KEYS } from '@/shared/config/constants';
import { generateSeoMetadata } from '@/shared/seo/seo';

export type DashboardProps = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: DashboardProps): Promise<Metadata> {
  return generateSeoMetadata(params.locale, SEO_KEYS.DASHBOARD);
}

export default function DashboardPage() {
  return (
    <PageLayout>
      <Container>
        <Earnings />
      </Container>
    </PageLayout>
  );
}

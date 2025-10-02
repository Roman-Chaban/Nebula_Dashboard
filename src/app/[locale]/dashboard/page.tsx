import { type Metadata } from 'next';

import { Container, PageLayout } from '@/shared/ui/index';
import { Earnings } from '@/widgets/Earnings/ui/Earnings';

export const metadata: Metadata = {
  title: 'Nebula | Dashboard Page',
  description: 'Dashboard page showing your earnings and performance metrics.',
  keywords: ['dashboard', 'earnings', 'analytics', 'Nebula'],
};

export default function DashboardPage() {
  return (
    <PageLayout>
      <Container>
        <Earnings />
      </Container>
    </PageLayout>
  );
}

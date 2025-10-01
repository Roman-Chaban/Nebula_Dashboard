import { Container, PageLayout } from '@/shared/ui/index';
import { Earnings } from '@/widgets/Earnings/ui/Earnings';

export default function DashboardPage() {
  return (
    <PageLayout>
      <Container>
        <Earnings />
      </Container>
    </PageLayout>
  );
}

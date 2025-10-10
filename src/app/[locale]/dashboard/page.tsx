import { Container, PageLayout } from '@/shared/ui/index';
import { Earnings } from '@/widgets/Earnings/ui/Earnings';
import { Charts } from '@/widgets/Charts/ui/Charts';

export default function DashboardPage() {
  return (
    <PageLayout>
      <Container className="flex flex-col gap-5">
        <Earnings />
        <Charts />
      </Container>
    </PageLayout>
  );
}

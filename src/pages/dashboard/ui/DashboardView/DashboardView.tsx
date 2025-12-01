import type { FC } from 'react';

import { Container, PageLayout } from '@/shared/ui/index';
import { Earnings } from '@/widgets/Earnings/ui/Earnings';
import { Charts } from '@/widgets/Charts/ui/Charts';
import { CheckTable } from '@/widgets/CheckTable/ui/CheckTable';

const DashboardView: FC = () => {
  return (
    <PageLayout>
      <Container className="flex flex-col gap-5">
        <Earnings />
        <Charts />
        <CheckTable />
      </Container>
    </PageLayout>
  );
};

export default DashboardView;

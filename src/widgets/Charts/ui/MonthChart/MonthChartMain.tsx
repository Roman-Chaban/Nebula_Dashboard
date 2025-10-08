import { type FC } from 'react';

import { Container } from '@/shared/ui';
import { MonthChartInformation } from '@/widgets/Charts/index';

export const MonthChartMain: FC = () => {
  return (
    <Container htmlTag="div" className="">
      <MonthChartInformation />
    </Container>
  );
};

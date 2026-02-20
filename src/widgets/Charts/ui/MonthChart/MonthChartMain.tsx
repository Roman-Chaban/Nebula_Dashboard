import { type FC } from 'react';

import { Container } from '@/shared/ui';
import { MonthChartInformation } from '@/widgets/Charts/index';
import LineChartWithSlider from './LineChartWithSlider';

export const MonthChartMain: FC = () => {
  return (
    <Container htmlTag="div" className="flex">
      <MonthChartInformation />
      <LineChartWithSlider />
    </Container>
  );
};

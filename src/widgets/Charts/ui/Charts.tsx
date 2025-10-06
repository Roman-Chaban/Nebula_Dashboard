import { type FC } from 'react';
import { Container } from '@/shared/ui';
import { ChartsProps } from '@/widgets/Charts/model/types';
import { MonthChart, WeeklyChart } from '@/widgets/Charts/index';

export const Charts: FC<ChartsProps> = ({ children }) => {
  return (
    <Container htmlTag="section" className="flex items-center justify-between gap-5">
      <MonthChart />
      <WeeklyChart />
      {children}
    </Container>
  );
};

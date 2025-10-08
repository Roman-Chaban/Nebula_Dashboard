import { type FC } from 'react';
import { ChartsBox, ChartHeader } from '@/widgets/Charts/index';

export const WeeklyChart: FC = () => {
  return (
    <ChartsBox paddingClass="pt-[29px] pr-[28.74px] pb-[27px] pl-[31px]">
      <ChartHeader />
    </ChartsBox>
  );
};

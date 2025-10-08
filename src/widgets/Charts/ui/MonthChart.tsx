import { type FC } from 'react';
import { ChartsBox, ChartHeader } from '@/widgets/Charts/index';

export const MonthChart: FC = () => {
  return (
    <ChartsBox paddingClass="pt-[26px] pr-[32px] pb-[27px] pl-[31px]">
      <ChartHeader />
    </ChartsBox>
  );
};

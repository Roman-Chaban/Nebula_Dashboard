'use client';

import { type FC } from 'react';

import { ChartsBox, ChartHeader } from '@/widgets/Charts/index';
import { useTranslation } from 'react-i18next';
import { WeeklyThumbs } from './WeeklyThumbs';

export const WeeklyChart: FC = () => {
  const { t } = useTranslation();

  return (
    <ChartsBox paddingClass="pt-[29px] pr-[28.74px] pb-[27px] pl-[31px]">
      <ChartHeader title={t('CHARTS.WEEKLY_CHART.header_title')} />
      <WeeklyThumbs
        columnWidth={15}
        segmentHeight={60}
        segmentGap={0}
        gap={45}
        paddingX={28}
        topPadding={20}
        bottomMargin={30}
      />
    </ChartsBox>
  );
};

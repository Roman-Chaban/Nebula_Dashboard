'use client';

import { type FC } from 'react';

import { ChartsBox, ChartHeader } from '@/widgets/Charts/index';
import { CalendarIcon } from '@/shared/ui/Icons/Icons';
import { useTranslation } from 'react-i18next';

export const MonthChart: FC = () => {
  const { t } = useTranslation();
  return (
    <ChartsBox paddingClass="pt-[26px] pr-[32px] pb-[27px] pl-[31px]">
      <ChartHeader
        extraBlock={{ label: t('CHARTS.WEEKLY_CHART.extra_title'), icon: <CalendarIcon /> }}
      />
    </ChartsBox>
  );
};

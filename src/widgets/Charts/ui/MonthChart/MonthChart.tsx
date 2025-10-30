'use client';

import { type FC } from 'react';

import { MonthChartMain } from '@/widgets/Charts/index';
import { CalendarIcon } from '@/shared/ui/Icons/Icons';
import { useTranslation } from 'react-i18next';
import { CommonContainer } from '@/shared/ui/CommonContainer/CommonContainer';
import { CommonHeader } from '@/shared/ui/Common/CommonHeader/CommonHeader';
import { ChartIcon } from '@/shared/ui/Icons/Icons';

export const MonthChart: FC = () => {
  const { t } = useTranslation();
  return (
    <CommonContainer paddingClass="pt-[26px] pr-[32px] pb-[27px] pl-[31px] gap-[28px]">
      <CommonHeader
        extraBlock={{ label: t('CHARTS.WEEKLY_CHART.extra_title'), icon: <CalendarIcon /> }}
        icon={<ChartIcon />}
      />
      <MonthChartMain />
    </CommonContainer>
  );
};

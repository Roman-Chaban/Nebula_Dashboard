'use client';

import { type FC } from 'react';

import { useTranslation } from 'react-i18next';
import { WeeklyThumbs } from './WeeklyThumbs';
import { CommonContainer } from '@/shared/ui/CommonContainer/CommonContainer';
import { CommonHeader } from '@/shared/ui/Common/CommonHeader/CommonHeader';
import { ChartIcon } from '@/shared/ui/Icons/Icons';

export const WeeklyChart: FC = () => {
  const { t } = useTranslation();

  return (
    <CommonContainer paddingClass="pt-[29px] pr-[28.74px] pb-[27px] pl-[31px]">
      <CommonHeader
        title={t('CHARTS.WEEKLY_CHART.header_title')}
        icon={<ChartIcon />}
      />
      <WeeklyThumbs
        columnWidth={15}
        segmentHeight={60}
        segmentGap={0}
        gap={45}
        paddingX={28}
        topPadding={20}
        bottomMargin={30}
      />
    </CommonContainer>
  );
};

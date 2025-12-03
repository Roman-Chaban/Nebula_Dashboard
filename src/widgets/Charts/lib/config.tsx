import {
  DaysData,
  MonthChartInformationItems,
} from '@/widgets/Charts/model/types';

import { DoneTrackIcon } from '@/shared/ui/Icons/Icons';

export const monthChartInformationItems: MonthChartInformationItems = [
  {
    id: 1,
    primaryTitle: '$37.5K',
    primarySubtitle: 'Total Spent',
    perecent: '+2.45%',
    trackItem: {
      title: 'On track',
      icon: <DoneTrackIcon />,
    },
  },
];

export const data: DaysData = [
  {
    day: 17,
    segments: [
      { value: 17, color: 'var(--color-chart-primary)' },
      { value: 18, color: 'var(--color-chart-secondary)' },
      { value: 19, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 18,
    segments: [
      { value: 18, color: 'var(--color-chart-primary)' },
      { value: 19, color: 'var(--color-chart-secondary)' },
      { value: 20, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 19,
    segments: [
      { value: 19, color: 'var(--color-chart-primary)' },
      { value: 20, color: 'var(--color-chart-secondary)' },
      { value: 21, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 20,
    segments: [
      { value: 20, color: 'var(--color-chart-primary)' },
      { value: 21, color: 'var(--color-chart-secondary)' },
      { value: 22, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 21,
    segments: [
      { value: 21, color: 'var(--color-chart-primary)' },
      { value: 22, color: 'var(--color-chart-secondary)' },
      { value: 23, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 22,
    segments: [
      { value: 22, color: 'var(--color-chart-primary)' },
      { value: 23, color: 'var(--color-chart-secondary)' },
      { value: 24, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 23,
    segments: [
      { value: 23, color: 'var(--color-chart-primary)' },
      { value: 24, color: 'var(--color-chart-secondary)' },
      { value: 25, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 24,
    segments: [
      { value: 24, color: 'var(--color-chart-primary)' },
      { value: 25, color: 'var(--color-chart-secondary)' },
      { value: 26, color: 'var(--color-deep-blue)' },
    ],
  },
  {
    day: 25,
    segments: [
      { value: 25, color: 'var(--color-chart-primary)' },
      { value: 26, color: 'var(--color-chart-secondary)' },
      { value: 27, color: 'var(--color-deep-blue)' },
    ],
  },
];

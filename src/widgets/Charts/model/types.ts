import { ReactNode } from 'react';

export type ChartsProps = { children?: ReactNode };

export type ChartsBoxProps = {
  children?: ReactNode;
  paddingClass?: string;
};

export type ChartHeaderExtraBlock = {
  label: string;
  icon?: ReactNode;
};

export type ChartHeaderProps = {
  children?: ReactNode;
  title?: string;
  extraBlock?: ChartHeaderExtraBlock;
};

export type MonthChartInformationTrackItem = {
  title: string;
  icon: ReactNode;
};

export type MonthChartInformationItem = {
  id: number;
  primaryTitle: string;
  primarySubtitle: string;
  perecent: string;
  trackItem: MonthChartInformationTrackItem;
};

export type MonthChartInformationItems = MonthChartInformationItem[];

import { ReactNode } from 'react';

export type ChartHeaderExtraBlock = {
  label: string;
  icon?: ReactNode;
};

export type CommonHeaderProps = {
  children?: ReactNode;
  title?: string;
  extraBlock?: ChartHeaderExtraBlock;
  icon?: ReactNode;
};

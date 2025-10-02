import { ReactElement } from 'react';

export type EaringItem = {
  id: number;
  icon?: ReactElement;
  title: string;
  subtitle: string;
  extraTitle?: string;
};

export type EaringItems = EaringItem[];

export type EaringProps = {
  earing: EaringItem;
};

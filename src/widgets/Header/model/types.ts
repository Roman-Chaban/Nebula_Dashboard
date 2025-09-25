import { ReactNode } from 'react';

export type HeaderProps = {
  title: string;
  subtitle: string;
};

export type HeaderInfoProps = HeaderProps;

export type HeaderInputRightSideItem = {
  id: number;
  icon: ReactNode;
};

export type HeaderInputRightSideItems = HeaderInputRightSideItem[];

import { ReactNode } from 'react';

export type TextSize = 'sm' | 'md' | 'm' | 'l' | 'xl' | 'xxl';
export type TextWeight = '400' | '500' | '600' | '700' | '800';

export type TextProperties = {
  size: TextSize;
  weight?: TextWeight;
  color: string;
};

export type TextProps = {
  children: ReactNode;
  className?: string;
  properties: TextProperties;
};

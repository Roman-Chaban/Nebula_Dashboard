import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';

export type HeadingOwnProps<T extends ElementType = 'h1'> = {
  as?: T;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

export type HeadingProps<T extends ElementType> = HeadingOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof HeadingOwnProps>;

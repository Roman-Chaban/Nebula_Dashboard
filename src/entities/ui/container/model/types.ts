import { HTMLAttributes, ReactNode } from 'react';

export type HtmlTag = 'section' | 'div' | 'aside' | 'article';

export type ContainerProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  htmlTag?: HtmlTag;
} & HTMLAttributes<HTMLElement>;

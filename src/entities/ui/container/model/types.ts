import { HTMLAttributes, ReactNode, RefObject } from 'react';

export type HtmlTag = 'section' | 'div' | 'aside' | 'article';

export type ContainerProps = {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  htmlTag?: HtmlTag;
  ref?: RefObject<HTMLElement>;
} & HTMLAttributes<HTMLElement>;

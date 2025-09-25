import { JSX } from "react";

export type ListItemKey = string | number;

export type ListTag = 'ul' | 'ol';

export type BaseListProps<T> = {
  renderList: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getItemKey?: (item: T) => ListItemKey;
};

export type ListLayoutProps = {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  itemClassName?: string;
};

export type ListProps<T> = BaseListProps<T> & ListLayoutProps;

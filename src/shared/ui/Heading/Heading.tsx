import { type ElementType } from 'react';
import { HeadingProps } from '@/entities/ui/heading/model/types';

export const Heading = <T extends ElementType = 'h1'>({
  as,
  level = 1,
  children,
  className,
  id,
  style,
  ...props
}: HeadingProps<T>) => {
  const Tag = as || (`h${level}` as ElementType);
  return (
    <Tag id={id} style={style} className={className} {...props}>
      {children}
    </Tag>
  );
};

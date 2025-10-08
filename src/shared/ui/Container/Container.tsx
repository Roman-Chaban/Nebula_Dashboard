import { Ref, type FC } from 'react';
import { ContainerProps } from '@/entities/ui/container/model/types';
import { parseSize } from '@/shared/lib/helpers/parseSize';

export const Container: FC<ContainerProps> = ({
  children,
  htmlTag: Tag = 'div',
  width,
  height,
  ref,
  className,
}) => {
  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={className}
      style={{ width: parseSize(width), height: parseSize(height) }}
    >
      {children}
    </Tag>
  );
};

import { type FC } from 'react';

import { TextProps } from '@/entities/ui/text/model/types';
import { textSizeVariants, textWeightVariants } from '@/shared/ui/Text/lib/variants';

export const Text: FC<TextProps> = ({ children, properties, className }) => {
  const { size, weight, color } = properties;

  return (
    <span
      className={`${textSizeVariants[size]} ${weight ? textWeightVariants[weight] : ''} ${color} ${className}`}
    >
      {children}
    </span>
  );
};

import { type FC } from 'react';

import { ChartDefsProps } from '@/widgets/Charts/model/types';

export const ChartDefs: FC<ChartDefsProps> = ({ shadowId = 'softShadow' }) => (
  <defs>
    <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feBlend in="SourceGraphic" in2="blur" mode="normal" />
    </filter>
  </defs>
);

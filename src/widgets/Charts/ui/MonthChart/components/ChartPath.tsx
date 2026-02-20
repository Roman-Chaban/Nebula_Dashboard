import { type FC } from 'react';

import { ChartPathProps } from '@/widgets/Charts/model/types';

export const ChartPath: FC<ChartPathProps> = ({
  path,
  stroke,
  strokeWidth,
  strokeOpacity = 1,
  filter,
}) => (
  <path
    d={path}
    fill="none"
    strokeWidth={strokeWidth}
    strokeOpacity={strokeOpacity}
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    filter={filter}
  />
);

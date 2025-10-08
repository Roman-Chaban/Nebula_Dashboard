import { type FC } from 'react';

import type { ChartLabelsProps } from '@/widgets/Charts/model/types';

export const ChartLabels: FC<ChartLabelsProps> = ({ points, labels, height }) => (
  <>
    {points.map((point, index) => (
      <text
        key={index}
        x={point.x}
        y={height - 12}
        textAnchor="middle"
        className="text-xs"
        style={{ fontSize: 13, fill: '#94A3B8' }}
        aria-hidden
      >
        {labels[index]}
      </text>
    ))}
  </>
);

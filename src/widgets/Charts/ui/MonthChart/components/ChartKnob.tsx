import { type FC } from 'react';

import type { ChartKnobProps } from '@/widgets/Charts/model/types';

export const ChartKnob: FC<ChartKnobProps> = ({
  knob,
  isDragging,
  onPointerDown,
  onKeyDown,
  ariaValueMin,
  ariaValueMax,
  ariaValueNow,
  ariaLabel,
}) => (
  <>
    <g
      transform={`translate(${knob.x}, ${knob.y})`}
      onPointerDown={onPointerDown}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="slider"
      aria-valuemin={ariaValueMin}
      aria-valuemax={ariaValueMax}
      aria-valuenow={ariaValueNow}
      aria-label={ariaLabel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <circle r={18} fill="var(--color-chart-natural)" />
    </g>

    <g transform={`translate(${knob.x}, ${knob.y})`} pointerEvents="none">
      <circle r={9} fill="var(--color-white)" stroke="var(--color-chart-blue)" strokeWidth={3} />
      <circle r={4} fill="var(--color-chart-blue)" />
    </g>
  </>
);

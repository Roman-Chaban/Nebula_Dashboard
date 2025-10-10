import { ChartKnobProps } from '@/widgets/Charts/model/types';
import { type FC } from 'react';

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
      data-valuemin={ariaValueMin}
      data-valuemax={ariaValueMax}
      data-valuenow={ariaValueNow}
      aria-label={ariaLabel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab', outline: 'none' }}
      pointerEvents="all"
      className="focus:outline-none focus-visible:outline-none"
    >
      <circle r={24} fill="transparent" />
      <circle r={18} fill="var(--color-chart-natural)" />
    </g>

    <g transform={`translate(${knob.x}, ${knob.y})`} pointerEvents="none">
      <circle r={9} fill="var(--color-white)" stroke="var(--color-chart-blue)" strokeWidth={3} />
      <circle r={4} fill="var(--color-chart-blue)" />
    </g>
  </>
);

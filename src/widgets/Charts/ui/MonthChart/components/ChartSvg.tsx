import { type FC } from 'react';

import type { ChartSvgProps } from '@/widgets/Charts/model/types';
import {
  ChartDefs,
  ChartKnob,
  ChartLabels,
  ChartPath,
} from '@/widgets/Charts/ui/MonthChart/components/index';

export const ChartSvg: FC<ChartSvgProps> = ({
  width,
  height,
  primarySeriesPath,
  secondarySeriesPath,
  primarySeriesPoints,
  labels,
  knob,
  isDragging,
  selectedIndex,
  primaryDataSeries,
  onPointerMove,
  onPointerUp,
  onPointerDown,
  onKeyDown,
}) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width="100%"
    height="auto"
    className="block"
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    onPointerCancel={onPointerUp}
    role="img"
    aria-label="Line chart with draggable slider"
  >
    <ChartDefs />

    <ChartPath path={secondarySeriesPath} stroke="#7EE0FF" strokeWidth={6} strokeOpacity={0.35} />

    <ChartPath
      path={primarySeriesPath}
      stroke="#5B22FF"
      strokeWidth={5}
      filter="url(#softShadow)"
    />

    <ChartLabels points={primarySeriesPoints} labels={labels} height={height} />

    <ChartKnob
      knob={knob}
      isDragging={isDragging}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      ariaValueMin={Math.min(...primaryDataSeries)}
      ariaValueMax={Math.max(...primaryDataSeries)}
      ariaValueNow={primaryDataSeries[selectedIndex]}
      ariaLabel={`Value for ${labels[selectedIndex]}`}
    />
  </svg>
);

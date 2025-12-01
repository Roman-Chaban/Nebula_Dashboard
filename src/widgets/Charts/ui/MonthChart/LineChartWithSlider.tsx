'use client';

import {
  CHART_CONFIG,
  CHART_MONTH_LABELS,
  PRIMARY_DATA_SERIES,
  SECONDARY_DATA_SERIES,
} from '@/widgets/Charts/model/constants';

import { useResizeObserver } from '@/shared/hooks/useResizeObserver';
import { useChartData } from '@/shared/hooks/useChartData';
import { useChartInteractions } from '@/widgets/Charts/ui/MonthChart/hooks/useChartInteractions';
import { useChartKnob } from '@/widgets/Charts/ui/MonthChart/hooks/useChartKnob';
import {
  ChartSvg,
  ChartTooltip,
} from '@/widgets/Charts/ui/MonthChart/components/index';

import { Container } from '@/shared/ui';
import { useRef } from 'react';

export default function LineChartWithSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const WIDTH = useResizeObserver({ containerRef, fallbackMinWidth: 300 });
  const HEIGHT = CHART_CONFIG.svg.height;

  const { primarySeriesPoints, primarySeriesPath, secondarySeriesPath } =
    useChartData(PRIMARY_DATA_SERIES, SECONDARY_DATA_SERIES, WIDTH, HEIGHT);

  const { clientXToIndex } = useChartInteractions(
    containerRef,
    primarySeriesPoints,
  );

  const {
    selectedIndex,
    isDragging,
    knob,
    knobValue,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
  } = useChartKnob({
    primarySeriesPoints,
    primaryDataSeries: PRIMARY_DATA_SERIES,
    clientXToIndex,
  });

  return (
    <div ref={containerRef} className="w-full">
      <Container htmlTag="div">
        <Container htmlTag="div" className="relative">
          <ChartSvg
            width={WIDTH}
            height={HEIGHT}
            primarySeriesPath={primarySeriesPath}
            secondarySeriesPath={secondarySeriesPath}
            primarySeriesPoints={primarySeriesPoints}
            labels={CHART_MONTH_LABELS}
            knob={knob}
            isDragging={isDragging}
            selectedIndex={selectedIndex}
            primaryDataSeries={PRIMARY_DATA_SERIES}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerDown={onPointerDown}
            onKeyDown={onKeyDown}
          />
          <ChartTooltip knob={knob} value={knobValue} />
        </Container>
      </Container>
    </div>
  );
}

'use client';

import {
  CHART_CONFIG,
  CHART_MONTH_LABELS,
  PRIMARY_DATA_SERIES,
  SECONDARY_DATA_SERIES,
} from '@/widgets/Charts/model/constants';

import { useContainerWidth } from '@/shared/hooks/useResizeObserver';
import { useChartData } from '@/shared/hooks/useChartData';
import { useChartInteractions } from '@/widgets/Charts/ui/MonthChart/hooks/useChartInteractions';
import { useChartKnob } from '@/widgets/Charts/ui/MonthChart/hooks/useChartKnob';
import { ChartSvg, ChartTooltip } from '@/widgets/Charts/ui/MonthChart/components/index';

import { Container } from '@/shared/ui';

export default function LineChartWithSlider() {
  const { containerRef, clientXToIndex } = useChartInteractions([]);

  const width = useContainerWidth(containerRef, 340);
  const height = CHART_CONFIG.svg.height;

  const { primarySeriesPoints, primarySeriesPath, secondarySeriesPath } = useChartData(
    PRIMARY_DATA_SERIES,
    SECONDARY_DATA_SERIES,
    width,
    height,
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
    <Container htmlTag="div" ref={containerRef} className="w-full">
      <Container htmlTag="div">
        <Container htmlTag="div" className="relative">
          <ChartSvg
            width={width}
            height={height}
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
    </Container>
  );
}

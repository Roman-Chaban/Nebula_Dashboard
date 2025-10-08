import { useEffect } from 'react';
import { useKnob } from '@/shared/hooks/useKnob';

import type { Point } from '@/widgets/Charts/model/types';
import { UseChartKnobProps } from '@/widgets/Charts/ui/MonthChart/hooks/types';

export const useChartKnob = ({
  primarySeriesPoints,
  primaryDataSeries,
  clientXToIndex,
}: UseChartKnobProps) => {
  const {
    selectedIndex,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
    setSelectedIndex,
  } = useKnob(2, primaryDataSeries.length, clientXToIndex);

  useEffect(() => {
    if (selectedIndex >= primarySeriesPoints.length) {
      setSelectedIndex(primarySeriesPoints.length - 1);
    }
  }, [primarySeriesPoints.length, selectedIndex, setSelectedIndex]);

  const knob: Point = primarySeriesPoints[selectedIndex] ?? { x: 0, y: 0 };
  const knobValue = primaryDataSeries[selectedIndex];

  return {
    selectedIndex,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
    knob,
    knobValue,
  };
};

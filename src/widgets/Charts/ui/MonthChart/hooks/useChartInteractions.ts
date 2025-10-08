import { useCallback, useRef } from 'react';
import type { Point } from '@/widgets/Charts/model/types';

export const useChartInteractions = (primarySeriesPoints: Point[]) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clientXToIndex = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return 0;
      const svg = containerRef.current.querySelector('svg');
      if (!svg) return 0;
      const rect = svg.getBoundingClientRect();
      const x = clientX - rect.left;
      let best = 0;
      let bestDist = Infinity;
      primarySeriesPoints.forEach((p, i) => {
        const d = Math.abs(p.x - x);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      return best;
    },
    [primarySeriesPoints],
  );

  return {
    containerRef,
    clientXToIndex,
  };
};

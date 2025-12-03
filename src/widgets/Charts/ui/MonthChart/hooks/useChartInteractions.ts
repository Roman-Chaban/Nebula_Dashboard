import { useCallback } from 'react';
import type { RefObject } from 'react';
import type { Point } from '@/widgets/Charts/model/types';

type UseChartInteractionsResult = {
  clientXToIndex: (clientX: number) => number | null;
  containerRef: RefObject<HTMLElement | null>;
};

export const useChartInteractions = (
  containerRef: RefObject<HTMLElement | null>,
  primarySeriesPoints: readonly Point[],
): UseChartInteractionsResult => {
  const clientXToIndex = useCallback(
    (clientX: number): number | null => {
      const container = containerRef.current;
      if (!container) {
        return null;
      }

      const svg = container.querySelector<SVGSVGElement>('svg');
      if (!svg) {
        return null;
      }

      if (!primarySeriesPoints || primarySeriesPoints.length === 0) {
        return null;
      }

      const rect = svg.getBoundingClientRect();
      const x = clientX - rect.left;

      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < primarySeriesPoints.length; i += 1) {
        const point = primarySeriesPoints[i];
        const dist = Math.abs(point.x - x);

        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      }

      return bestIndex;
    },
    [containerRef, primarySeriesPoints],
  );

  return {
    containerRef,
    clientXToIndex,
  };
};

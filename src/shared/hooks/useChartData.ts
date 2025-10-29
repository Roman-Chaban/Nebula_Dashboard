import { useMemo } from 'react';

import { Series } from '@/widgets/Charts/model/types';
import { catmullRomToBezier, normalizeSeriesToPoints } from '@/widgets/Charts/model/math';

/**
 * Hook to create derived chart data (points + SVG paths)
 * Purely deterministic from inputs -> easy to test.
 */
export const useChartData = (
  primarySeries: Series,
  secondarySeries: Series,
  chartWidth: number,
  chartHeight: number,
) => {
  const { points: primarySeriesPoints, path: primarySeriesPath } = useMemo(() => {
    const normalizedPrimaryPoints = normalizeSeriesToPoints(primarySeries, chartWidth, chartHeight);
    const primaryBezierPath = catmullRomToBezier(normalizedPrimaryPoints);
    return { points: normalizedPrimaryPoints, path: primaryBezierPath };
  }, [primarySeries, chartWidth, chartHeight]);

  const { points: secondarySeriesPoints, path: secondarySeriesPath } = useMemo(() => {
    const normalizedSecondaryPoints = normalizeSeriesToPoints(
      secondarySeries,
      chartWidth,
      chartHeight,
    );
    const secondaryBezierPath = catmullRomToBezier(normalizedSecondaryPoints);
    return { points: normalizedSecondaryPoints, path: secondaryBezierPath };
  }, [secondarySeries, chartWidth, chartHeight]);

  return {
    primarySeriesPoints,
    secondarySeriesPoints,
    primarySeriesPath,
    secondarySeriesPath,
  };
};

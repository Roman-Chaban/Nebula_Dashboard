import type { Point } from '@/widgets/Charts/model/types';
import { CHART_CONFIG } from '@/widgets/Charts/model/constants';

/**
 * Normalize a numeric series into SVG points, given chart width/height.
 * Pure function, easy to unit-test.
 */
export const normalizeSeriesToPoints = (
  dataSeries: number[],
  chartWidth: number,
  chartHeight: number,
): Point[] => {
  const { padding } = CHART_CONFIG;
  const totalPoints = dataSeries.length;
  const drawableWidth = chartWidth - padding.left - padding.right;
  const drawableHeight = chartHeight - padding.top - padding.bottom;

  const minValue = Math.min(...dataSeries);
  const maxValue = Math.max(...dataSeries);
  const valueRange = Math.max(1, maxValue - minValue);

  return dataSeries.map((value, index) => {
    const x = padding.left + (index / (totalPoints - 1)) * drawableWidth;
    const y = padding.top + drawableHeight - ((value - minValue) / valueRange) * drawableHeight;
    return { x, y } as Point;
  });
};

/**
 * Convert an array of points to a smooth SVG path using Catmull-Rom to Bezier conversion.
 * Deterministic and pure.
 */
export const catmullRomToBezier = (chartPoints: Point[]): string => {
  if (chartPoints.length < 2) return '';
  const pathSegments: string[] = [];
  pathSegments.push(`M ${chartPoints[0].x.toFixed(2)} ${chartPoints[0].y.toFixed(2)}`);
  for (let i = 0; i < chartPoints.length - 1; i++) {
    const previous = i > 0 ? chartPoints[i - 1] : chartPoints[i];
    const current = chartPoints[i];
    const next = chartPoints[i + 1];
    const nextNext = i !== chartPoints.length - 2 ? chartPoints[i + 2] : next;

    const control1X = current.x + (next.x - previous.x) / 6;
    const control1Y = current.y + (next.y - previous.y) / 6;
    const control2X = next.x - (nextNext.x - current.x) / 6;
    const control2Y = next.y - (nextNext.y - current.y) / 6;

    pathSegments.push(
      `C ${control1X.toFixed(2)} ${control1Y.toFixed(2)} ${control2X.toFixed(2)} ${control2Y.toFixed(2)} ${next.x.toFixed(
        2,
      )} ${next.y.toFixed(2)}`,
    );
  }
  return pathSegments.join(' ');
};

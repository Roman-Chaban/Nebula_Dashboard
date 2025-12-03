import { useMemo } from 'react';

import type { WeeklyThumbsProps } from '@/widgets/Charts/model/types';

import { data } from '@/widgets/Charts/lib/config';

export const useWeeklyThumbs = ({
  columnWidth = 40,
  segmentHeight = 14,
  segmentGap = 6,
  gap = 25,
  paddingX = 24,
  topPadding = 18,
  bottomMargin = 28,
}: WeeklyThumbsProps) => {
  const weeklySegmentsData = data;

  const barWidth = columnWidth;
  const segmentBarHeight = segmentHeight;
  const segmentSpacing = segmentGap;
  const columnSpacing = gap;
  const horizontalPadding = paddingX;
  const chartTopPadding = topPadding;
  const chartBottomMargin = bottomMargin;

  const { segmentsStackHeight, svgWidth, svgHeight, cornerRadius } =
    useMemo(() => {
      const segmentsPerColumnLocal =
        weeklySegmentsData[0]?.segments?.length ?? 3;

      const segmentsStackHeightLocal =
        segmentBarHeight * segmentsPerColumnLocal +
        segmentSpacing * (segmentsPerColumnLocal - 1);

      const columnsCountLocal = weeklySegmentsData.length;

      const chartContentWidthLocal =
        horizontalPadding * 2 +
        columnsCountLocal * barWidth +
        (columnsCountLocal - 1) * columnSpacing;

      const svgWidthLocal = chartContentWidthLocal;
      const svgHeightLocal =
        chartTopPadding + segmentsStackHeightLocal + chartBottomMargin;

      const cornerRadiusLocal = Math.min(segmentBarHeight / 2, barWidth / 2);

      return {
        segmentsStackHeight: segmentsStackHeightLocal,
        svgWidth: svgWidthLocal,
        svgHeight: svgHeightLocal,
        cornerRadius: cornerRadiusLocal,
      };
    }, [
      weeklySegmentsData,
      barWidth,
      segmentBarHeight,
      segmentSpacing,
      columnSpacing,
      horizontalPadding,
      chartTopPadding,
      chartBottomMargin,
    ]);

  return {
    weeklySegmentsData,

    barWidth,
    segmentBarHeight,
    segmentSpacing,
    columnSpacing,
    horizontalPadding,
    chartTopPadding,
    chartBottomMargin,

    segmentsStackHeight,
    svgWidth,
    svgHeight,
    cornerRadius,
  };
};

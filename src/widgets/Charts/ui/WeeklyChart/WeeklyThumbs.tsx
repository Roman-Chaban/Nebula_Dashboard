import { type FC } from 'react';
import { Container } from '@/shared/ui';
import { WeeklyThumbsProps } from '@/widgets/Charts/model/types';
import { useWeeklyThumbs } from '@/shared/hooks/useWeeklyThumbs';

export const WeeklyThumbs: FC<WeeklyThumbsProps> = ({
  columnWidth = 40,
  segmentHeight = 14,
  segmentGap = 6,
  gap = 25,
  paddingX = 24,
  topPadding = 18,
  bottomMargin = 28,
}) => {
  const {
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
  } = useWeeklyThumbs({
    columnWidth,
    segmentHeight,
    segmentGap,
    gap,
    paddingX,
    topPadding,
    bottomMargin,
  });

  return (
    <Container htmlTag="div">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        width="100%"
        height="256px"
        role="img"
        aria-label="Weekly Revenue — configurable rounded pills"
      >
        <rect
          x="0"
          y="0"
          width={svgWidth}
          height={svgHeight}
          fill="transparent"
        />

        <g transform={`translate(${horizontalPadding}, 0)`}>
          {weeklySegmentsData.map((dayEntry, columnIndex) => {
            const columnX = columnIndex * (barWidth + columnSpacing);
            const segmentStackTopOffset = chartTopPadding;

            return (
              <g
                key={String(dayEntry.day)}
                transform={`translate(${columnX}, 0)`}
              >
                {dayEntry.segments.map((segment, segmentIndex) => {
                  const segmentOffsetY =
                    segmentStackTopOffset +
                    segmentIndex * (segmentBarHeight + segmentSpacing);

                  const topRoundedPath = `
                    M 0 ${segmentBarHeight}
                    L 0 ${cornerRadius}
                    A ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} 0
                    L ${barWidth - cornerRadius} 0
                    A ${cornerRadius} ${cornerRadius} 0 0 1 ${barWidth} ${cornerRadius}
                    L ${barWidth} ${segmentBarHeight}
                    Z
                  `;

                  if (segmentIndex === 0) {
                    return (
                      <path
                        key={`${dayEntry.day}-seg-${segmentIndex}`}
                        d={topRoundedPath}
                        transform={`translate(0, ${segmentOffsetY})`}
                        fill={segment.color}
                      />
                    );
                  }

                  return (
                    <rect
                      key={`${dayEntry.day}-seg-${segmentIndex}`}
                      x={0}
                      y={segmentOffsetY}
                      width={barWidth}
                      height={segmentBarHeight}
                      fill={segment.color}
                    />
                  );
                })}

                <text
                  x={barWidth / 2}
                  y={
                    chartTopPadding +
                    segmentsStackHeight +
                    chartBottomMargin / 2 +
                    13
                  }
                  textAnchor="middle"
                  fontSize={15}
                  fill="var(--color-light-icon)"
                >
                  {dayEntry.day}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </Container>
  );
};

'use client';

import { useEffect, useRef, useState, type FC } from 'react';

import type { ChartTooltipProps } from '@/widgets/Charts/model/types';

import { Container } from '@/shared/ui';

export const ChartTooltip: FC<ChartTooltipProps> = ({ knob, value }) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const [tooltipHeight, setTooltipHeight] = useState<number>(0);

  useEffect(() => {
    if (tooltipRef?.current) {
      setTooltipHeight(tooltipRef.current.offsetHeight);
    }
  }, [value, knob]);

  const CIRCLE_RADIUS = 6;
  const top = knob.y - CIRCLE_RADIUS - tooltipHeight - 4;

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: `${knob.x}px`,
        top: `${top}px`,
        transform: 'translateX(-50%)',
      }}
      ref={tooltipRef}
    >
      <Container
        htmlTag="div"
        className="inline-flex items-center justify-center rounded-lg bg-[var(--color-chart-blue-secondary)] px-3 py-1 text-sm font-semibold text-[var(--color-white)] shadow-md"
      >
        ${value}.00
      </Container>
    </div>
  );
};

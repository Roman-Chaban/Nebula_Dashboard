import { type FC } from 'react';

import type { ChartTooltipProps } from '@/widgets/Charts/model/types';

import { Container } from '@/shared/ui';

export const ChartTooltip: FC<ChartTooltipProps> = ({ knob, value }) => (
  <Container
    htmlTag="div"
    className="pointer-events-none absolute"
    style={{
      left: `${knob.x}px`,
      transform: 'translate(-50%, -100%)',
      top: `${knob.y - 28}px`,
    }}
  >
    <Container
      htmlTag="div"
      className="inline-flex items-center justify-center rounded-lg bg-[var(--color-chart-blue-secondary)] px-3 py-1 text-sm font-semibold text-[var(--color-white)] shadow-md"
    >
      ${value}.00
    </Container>
    <Container
      htmlTag="div"
      className="mx-auto mt-1 h-3 w-3 rounded-full bg-[var(--color-white)]"
      style={{ transform: 'translateY(-6px)' }}
    />
  </Container>
);

import { type FC } from 'react';

import { Button, Container, Heading } from '@/shared/ui';
import { ChartHeaderProps } from '@/widgets/Charts/model/types';
import { ChartIcon } from '@/shared/ui/Icons/Icons';

export const ChartHeader: FC<ChartHeaderProps> = ({ title, extraBlock }) => {
  const label = extraBlock?.label;
  const icon = extraBlock?.icon;
  return (
    <Container className="flex items-center justify-between">
      {label && icon && (
        <Container className="flex min-h-[37px] w-full max-w-[133px] flex-row-reverse items-center justify-center gap-1.5 rounded-[7px] bg-[var(--color-main)]">
          <Heading
            level={4}
            className="text-[var(--color-light-icon)] leading-extra text-[14px] font-medium"
          >
            {label}
          </Heading>{' '}
          {icon}
        </Container>
      )}
      {title && (
        <Heading level={4} className="leading-base text-2xl font-bold text-[var(--color-tertiary)]">
          {title}
        </Heading>
      )}
      <Button fullWidth icon={<ChartIcon />} variant="base" tone="base" size="sm" />
    </Container>
  );
};

import { type FC } from 'react';

import { CommonHeaderProps } from '@/entities/ui/common/common-header/common-header';
import { Button, Container, Heading } from '@/shared/ui';

export const CommonHeader: FC<CommonHeaderProps> = ({
  extraBlock,
  title,
  icon,
}) => {
  const LABEL = extraBlock?.label;
  const ICON = extraBlock?.icon;
  return (
    <Container className="flex items-center justify-between">
      {LABEL && ICON && (
        <Container className="flex min-h-[37px] w-full max-w-[133px] flex-row-reverse items-center justify-center gap-1.5 rounded-[7px] bg-[var(--color-main)]">
          <Heading
            level={4}
            className="leading-extra text-[14px] font-medium text-[var(--color-light-icon)]"
          >
            {LABEL}
          </Heading>{' '}
          {ICON}
        </Container>
      )}
      {title && (
        <Heading
          level={4}
          className="leading-base text-2xl font-bold text-[var(--color-tertiary)]"
        >
          {title}
        </Heading>
      )}
      <Button fullWidth icon={icon} variant="base" tone="base" size="sm" />
    </Container>
  );
};

import { type FC } from 'react';
import { HeaderInfoProps } from '@/widgets/Header/model/types';
import { Container } from '@/shared/ui/Container/Container';
import { Heading } from '@/shared/ui/Heading/Heading';

export const HeaderInfo: FC<HeaderInfoProps> = ({ title, subtitle }) => {
  return (
    <Container className="flex flex-col">
      <span className="leading-extra text-secondary inline-block text-[14px] font-medium dark:text-[var(--color-white)]">
        {subtitle}
      </span>
      <Heading
        level={1}
        className="text-primary leading-medium text-[34px] font-bold tracking-[-0.02em] dark:text-[var(--color-white)]"
      >
        {title}
      </Heading>
    </Container>
  );
};

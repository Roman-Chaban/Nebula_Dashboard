import { type FC } from 'react';

import { EaringProps } from '@/widgets/Earnings/model/types';
import { Container, Heading } from '@/shared/ui';
import { parseExtraTitle } from '@/shared/utils/helpers/parseExtraTitle';

export const Earing: FC<EaringProps> = ({ earing }) => {
  const { percent, restText } = parseExtraTitle(earing.extraTitle);

  return (
    <Container
      id={String(earing.id)}
      className="flex min-h-[97px] w-full max-w-[248px] items-center gap-[18.21px] rounded-[20px] bg-[var(--color-white)] px-5"
    >
      {earing.icon}
      <Container>
        <Heading level={3} className="text-[14px] font-medium text-[var(--color-light-icon)]">
          {earing.title}
        </Heading>
        <Heading level={4} className="text-2xl font-bold text-[var(--color-primary)]">
          {earing.subtitle}
        </Heading>
        {earing.extraTitle && (
          <span className="text-[12px] text-[var(--color-light-icon)]">
            {percent && (
              <span className="font-bold text-[var(--color-light-green)]">{percent}</span>
            )}{' '}
            {restText}
          </span>
        )}
      </Container>
    </Container>
  );
};

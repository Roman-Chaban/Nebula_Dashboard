'use client';

import { type FC } from 'react';

import { EaringProps } from '@/widgets/Earnings/model/types';
import { Container, Heading, Text } from '@/shared/ui';
import { parseExtraTitle } from '@/shared/utils/helpers/parseExtraTitle';
import { useTranslation } from 'react-i18next';

export const Earing: FC<EaringProps> = ({ earing }) => {
  const { t } = useTranslation();
  const title = t(earing.title);
  const subtitle = t(earing.subtitle);
  const extraTitle = earing.extraTitle ? t(earing.extraTitle) : '';
  const { percent, restText } = parseExtraTitle(earing.extraTitle);

  return (
    <Container
      id={String(earing.id)}
      className="flex min-h-[97px] w-full max-w-[248px] items-center gap-[18.21px] rounded-[20px] bg-[var(--color-white)] px-5"
    >
      {earing.icon}
      <Container>
        <Heading level={3} className="text-[14px] font-medium text-[var(--color-light-icon)]">
          {title}
        </Heading>
        <Heading level={4} className="text-2xl font-bold text-[var(--color-primary)]">
          {subtitle}
        </Heading>
        {extraTitle && (
          <Text properties={{ size: 'sm', color: 'text-[var(--color-light-icon)]', weight: '400' }}>
            {percent && (
              <Text
                properties={{
                  size: 'sm',
                  color: 'text-[var(--color-light-green)]',
                  weight: '700',
                }}
              >
                {percent}{' '}
              </Text>
            )}
            {restText}
          </Text>
        )}
      </Container>
    </Container>
  );
};

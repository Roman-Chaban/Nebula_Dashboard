'use client';

import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { UpsellCardIcon, UpsellCardMediumIcon } from '@/shared/ui/Icons/Icons';

import { UpsellCardProps } from '@/widgets/Sidebar/model/types';
import { useTranslation } from 'react-i18next';
import { Heading } from '@/shared/ui/Heading/Heading';

export const SidebarUpsellCard: FC<UpsellCardProps> = ({ upsellCardInfo }) => {
  const { t } = useTranslation();

  const subtitles = [upsellCardInfo.primarySubtitle, upsellCardInfo.secondarySubtitle];

  return (
    <Container
      htmlTag="div"
      className="relative mx-auto mt-auto mb-[25px] flex min-h-[190px] w-full max-w-[228px] items-center justify-center rounded-[28px] bg-[image:var(--color-linear-background)]"
    >
      <UpsellCardIcon
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="94"
        height="94"
      />
      <UpsellCardMediumIcon
        width="41"
        height="41"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Container htmlTag="div" className="flex flex-col items-center">
        <Heading level={2} className="min-h-[28px] text-[16px] text-[var(--color-white)]">
          {t(upsellCardInfo.title)}
        </Heading>
        {subtitles.map((subtitle, index) => (
          <span key={index} className="text-center text-[14px] text-[var(--color-white)]">
            {t(subtitle)}
          </span>
        ))}
      </Container>
    </Container>
  );
};

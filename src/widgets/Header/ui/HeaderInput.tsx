'use client';

import { ReactNode, type FC } from 'react';
import { Input, Container } from '@/shared/ui/index';
import { SearchIcon } from '@/shared/ui/Icons/Icons';
import { useTranslation } from 'react-i18next';

export const HeaderInput: FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <Container className="flex w-full max-w-[700px] items-center gap-5 rounded-[30px] bg-white p-[10px]">
      <Input size="md" placeholder={t('HEADER.input_placeholder')} leading={<SearchIcon />} />
      {children}
    </Container>
  );
};

'use client';

import { type FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/i18n/index';
import { ChildrenType } from '@/shared/types';

export const I18nProvider: FC<ChildrenType> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

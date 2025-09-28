'use client';

import { type FC } from 'react';
import { I18nProvider } from './I18nProvider';
import { ChildrenType } from '@/shared/types';

export const GlobalProviders: FC<ChildrenType> = ({ children }) => (
  <I18nProvider>{children}</I18nProvider>
);

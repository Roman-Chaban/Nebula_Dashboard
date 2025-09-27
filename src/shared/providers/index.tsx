'use client';

import { FC, ReactNode } from 'react';
import { I18nProvider } from './I18nProvider';

export const GlobalProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <I18nProvider>{children}</I18nProvider>
);

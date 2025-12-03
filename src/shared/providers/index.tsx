'use client';

import { type FC } from 'react';
import { I18nProvider } from './I18nProvider';
import { ChildrenType } from '@/shared/types';
import { Provider } from 'react-redux';
import { store } from '@/shared/store/store';

export const GlobalProviders: FC<ChildrenType> = ({ children }) => (
  <Provider store={store}>
    <I18nProvider>{children}</I18nProvider>
  </Provider>
);

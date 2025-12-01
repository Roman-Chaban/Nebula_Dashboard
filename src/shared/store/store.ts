'use client';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/shared/store/rootReducer/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

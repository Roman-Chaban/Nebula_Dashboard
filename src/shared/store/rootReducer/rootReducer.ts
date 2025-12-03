'use client';

import { combineReducers } from '@reduxjs/toolkit';

const placeholderReducer = (state = {}) => state;

export const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

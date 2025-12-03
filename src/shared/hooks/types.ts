import { Theme } from '@/shared/config/constants';
import type { RefObject } from 'react';

export type UseThemeToggleReturn = {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
};

export type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'children'
>;

export type UseResizeObserverProps = {
  containerRef: RefObject<HTMLElement | null> | null | undefined;
  fallbackMinWidth?: number;
};

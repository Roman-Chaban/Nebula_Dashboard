import { Theme } from '@/shared/config/constants';

export type UseThemeToggleReturn = {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
};

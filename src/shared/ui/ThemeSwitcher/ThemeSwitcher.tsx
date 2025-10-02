'use client';

import { type FC } from 'react';

import { useThemeToggle } from '@/shared/hooks/useThemeToggle';
import { THEMES } from '@/shared/config/constants';
import { Button } from '@/shared/ui/index';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme, mounted } = useThemeToggle();
  if (!mounted) return null;

  const isDark = theme === THEMES.DARK;

  return (
    <Button
      onClick={toggleTheme}
      className={`relative h-8 w-14 rounded-full transition-colors duration-300 ${isDark ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-light-icon)]'} cursor-pointer focus:outline-none`}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 transform rounded-full bg-[var(--color-white)] shadow-md transition-transform duration-300 ease-in-out ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
      />
    </Button>
  );
};

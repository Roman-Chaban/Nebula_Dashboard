'use client';

import { type FC } from 'react';

import { useThemeToggle } from '@/shared/hooks/useThemeToggle';
import { THEMES } from '@/shared/config/constants';
import { Button, Container } from '@/shared/ui/index';
import { DarkThemeBackground, LightThemeBackground } from '../Icons/Icons';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme, mounted } = useThemeToggle();
  if (!mounted) return null;

  const isDark = theme === THEMES.DARK;

  return (
    <Button
      onClick={toggleTheme}
      className={`relative h-10 w-20 cursor-pointer rounded-full transition-colors duration-300 focus:outline-none`}
    >
      {isDark ? (
        <DarkThemeBackground className="absolute inset-0 h-full w-full rounded-full transition-opacity duration-300" />
      ) : (
        <LightThemeBackground className="absolute inset-0 h-full w-full rounded-full transition-opacity duration-300" />
      )}

      <Container
        htmlTag="div"
        className={`absolute top-1/2 left-1 h-6 w-6 -translate-y-1/2 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
          isDark
            ? 'translate-x-12 bg-[image:var(--color-dark-brown)]'
            : 'translate-x-0 bg-[image:var(--color-light-yellow)]'
        }`}
      />
    </Button>
  );
};

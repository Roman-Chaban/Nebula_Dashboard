'use client';

import { useEffect, useState } from 'react';
import { Theme, THEMES } from '@/shared/config/constants';

export const useThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(THEMES.LIGHT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme(THEMES.DARK);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((previousTheme) => (previousTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));

  return { theme, toggleTheme, mounted };
};

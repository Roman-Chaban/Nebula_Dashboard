'use client';

import { type FC, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LOCALES, type Locale, SUPPORTED_LOCALES } from '@/shared/config/constants';
import i18n from '@/shared/i18n';
import { Container } from '@/shared/ui/Container/Container';
import { Button } from '@/shared/ui/Button/Button';

export const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    SUPPORTED_LOCALES.find((locale) => pathname?.startsWith(`/${locale}`)) || LOCALES.EN,
  );

  useEffect(() => {
    const localeFromPath = SUPPORTED_LOCALES.find((locale) => pathname?.startsWith(`/${locale}`));
    if (localeFromPath) setCurrentLocale(localeFromPath);
  }, [pathname]);

  const handleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    const newPath = pathname?.replace(`/${currentLocale}`, `/${newLocale}`) || `/${newLocale}`;
    i18n.changeLanguage(newLocale);
    setCurrentLocale(newLocale);
    router.push(newPath);
  };

  return (
    <Container className="relative inline-flex h-8 w-40 rounded-full bg-[var(--color-light-icon)] p-1 select-none">
      <Container
        className={`absolute top-0 left-0 h-full w-[50%] rounded-full bg-[var(--color-primary)] transition-transform duration-300 ${
          currentLocale === LOCALES.UA ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {SUPPORTED_LOCALES.map((locale) => (
        <Button
          key={locale}
          fullWidth
          onClick={() => handleChange(locale)}
          className={`relative z-10 flex-1 cursor-pointer text-sm font-semibold transition-colors duration-200 ${
            currentLocale === locale
              ? 'text-[var(--color-white)]'
              : 'text-[var(--color-light-white)]'
          }`}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </Container>
  );
};

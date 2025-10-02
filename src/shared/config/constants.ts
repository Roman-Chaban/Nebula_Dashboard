export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  MARKETPLACE: '/marketplace',
  TABLES: '/tables',
  KANBAN: '/kanban',
  PROFILE: '/profile',
  SIGNIN: '/signin',
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;
export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const LOCALES = {
  EN: 'en',
  UA: 'ua',
} as const;

export const SUPPORTED_LOCALES: Locale[] = [LOCALES.EN, LOCALES.UA];
export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

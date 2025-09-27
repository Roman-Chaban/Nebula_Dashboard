import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/shared/locales/en.json';
import ua from '@/shared/locales/ua.json';
import { LOCALES } from '@/shared/config/constants';

const { EN } = LOCALES;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
  },
  lng: EN,
  fallbackLng: EN,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;

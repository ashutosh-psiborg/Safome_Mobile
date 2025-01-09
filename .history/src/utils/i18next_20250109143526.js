import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../lang/en'

export const languageResources = {
  en: { translation: en },
  ger: { translation: ger },
};

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
  });

export default i18next;

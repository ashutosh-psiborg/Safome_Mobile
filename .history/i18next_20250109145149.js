import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Import translation files
import en from './locales/en/translation.json';
import german from './locales/hi/translation.json';

// Detect device language
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector) // Detect language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: 'en', // Default language
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;

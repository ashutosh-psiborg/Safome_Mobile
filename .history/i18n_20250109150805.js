import i18n from './i18n';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './src/lang/en/en.json';
import ger from './src/lang/ger/ger.json';

// Import translation files

// Detect device language
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
 i18

// i18n
//   .use(languageDetector) // Detect language
//   .use(initReactI18next) // Bind with React
//   .init({
//     fallbackLng: 'en', // Default language
//     resources: {
//       en: {translation: en},
//       ger: {translation: ger},
//     },
//     interpolation: {
//       escapeValue: false, // React already escapes values
//     },
//   });

export default i18n;

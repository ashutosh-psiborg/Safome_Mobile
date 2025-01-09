// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';
// import en from './src/lang/en/en.json';
// import ger from './src/lang/ger/ger.json';
// import hi from './src/lang/hi/hi.json';


// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: callback => {
//     const locale = RNLocalize.getLocales()[0].languageCode;
//     callback(locale);
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };
// i18n.use(languageDetector).use(initReactI18next).init({
//   fallbackLng: 'en', // Default language
//     resources: {
//       en: {translation: en},
//       ger: { translation: ger },
//       hi: {translation:hi}
//     },
//     interpolation: {
//       escapeValue: false, // React already escapes values
//     },  
// })
  



// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './src/lang/en/en.json'
import hi from './src/lang/hi/hi.json'
import ger from './src/lang/ger/ger.json'


const LANGUAGE_KEY = 'language';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    react: {
      useSuspense: false, // For SSR compatibility
    },
  });

// Load language from AsyncStorage
(async () => {
  const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
  if (storedLanguage) {
    i18n.changeLanguage(storedLanguage);
  }
})();

export default i18n;

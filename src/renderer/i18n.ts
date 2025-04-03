import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TRANSLATIONS_FR from './locales/fr.json';
import TRANSLATIONS_EN from './locales/en.json';
import TRANSLATIONS_IT from './locales/it.json';
import TRANSLATIONS_DE from './locales/de.json';
import TRANSLATIONS_ES from './locales/es.json';
import TRANSLATIONS_NL from './locales/nl.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
      it: {
        translation: TRANSLATIONS_IT,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
      es: {
        translation: TRANSLATIONS_ES,
      },
      nl: {
        translation: TRANSLATIONS_NL,
      },
    },
    lng: 'en-US', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

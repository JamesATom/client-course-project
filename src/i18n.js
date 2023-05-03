import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
// import { locizePlugin } from 'locize';
import LastUsed from 'locize-lastused';

const locizeOptions = {
  projectId: process.env.REACT_APP_PROJECT_ID,
  apiKey: process.env.REACT_APP_API_KEY_LOCALIZE, 
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
  version: 'latest'
};

if (process.env.NODE_ENV != 'production') {
    i18n.use(LastUsed);
}

i18n
    // .use(locizePlugin)
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        saveMissing: true,
        // keySeparator: false,

        interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
        },
        backend: locizeOptions,
        locizeLastUsed: locizeOptions
});

export default i18n;

// backend: {
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     apiKey: process.env.REACT_APP_API_KEY_LOCALIZE
// }
// "sync": "locize sync --path ./public/locales --project-id 489bdf18-d866-4726-b1e4-4914cb59a84a --api-key 783c8248-244d-473c-bf81-c79b71851114 --reference-language-only false"
  


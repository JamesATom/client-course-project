import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';

const locizeOptions = {
    projectId: process.env.REACT_APP_PROJECT_ID,
    apiKey: process.env.REACT_APP_API_KEY_LOCALIZE,
    refLng: process.env.REACT_APP_LOCIZE_REFLNG,
    version: process.env.REACT_APP_VERSION
};

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        saveMissing: true,
        backend: locizeOptions
    }
);

export default i18n;
// backend: {
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     apiKey: process.env.REACT_APP_API_KEY_LOCALIZE
// }
// "sync": "locize sync --path ./public/locales --project-id 1a0510f1-9c6c-4bae-93b2-a0221a8aec6c --api-key fe4c193d-320e-433d-8cbe-e87ef9dbfe8d --reference-language-only false"
 
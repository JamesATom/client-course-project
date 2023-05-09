import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';

const locizeOptions = {
    projectId: `${window.sessionStorage.getItem('projectId')}`,
    apiKey: `${window.sessionStorage.getItem('apiKey')}`,
    referenceLng: `${window.sessionStorage.getItem('referenceLng')}`,
    version: `${window.sessionStorage.getItem('version')}`
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
        interpolation: {
        escapeValue: false, 
        },
        backend: locizeOptions,
        locizeLastUsed: locizeOptions
});

export default i18n;


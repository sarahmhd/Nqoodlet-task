import ar from './locals/ar.json'
import en from './locals/en.json'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en, 
            },
            ar: {
                translation: ar, 
            },
        },
        lng: "en",
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
        fallbackLng: "en",
    });

export default i18n;
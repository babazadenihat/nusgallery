import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import az from "./locales/az/translation.json";
console.log(en)
const langs = {
    en: {
        translation: en
    },
    az: {
        translation: az
    },
}

i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    // lng: "az",
    langs,
    fallbackLng: "az",
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        caches: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18next;
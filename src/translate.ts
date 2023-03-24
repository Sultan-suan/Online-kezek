import {initReactI18next} from "react-i18next";
import i18n from "i18next"
export const language = 'kz'
import kz from './assets/i18n/kz.json'
import ru from './assets/i18n/ru.json'
import en from './assets/i18n/en.json'

const resources = {
    en: {
        translation: en
    },
    kz: {
        translation: kz
    },
    ru: {
        translation: ru
    }
}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        resources,
        detection: {
            order: ['htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        react: {useSuspense: false},
        interpolation: {
            escapeValue: false
        },
    });

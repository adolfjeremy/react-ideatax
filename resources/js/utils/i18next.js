import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "@/locale/en";
import id from "@/locale/id";
import jp from "@/locale/jp";
import cn from "@/locale/zh-CN";

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "en",
        fallbackLng: "en",
        resources: {
            en,
            id,
            jp,
            "zh-CN": cn,
        },
    });

export default i18next;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUs from "../locale/en.json";
import ptBr from "../locale/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enUs,
    },
    pt: {
      ...ptBr,
    },
  },
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

import { useTranslation } from "react-i18next";
import "./ButtonLang.css";

const ButtonLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="button__lang">
      <button
        type="button"
        className="lang__en"
        onClick={() => changeLanguage("en")}
      >
        <img src="src/assets/icon/eua.png" alt="" />
      </button>
      <span></span>
      <button className="lang__pt" onClick={() => changeLanguage("pt")}>
        <img src="src/assets/icon/brasil.png" alt="" />
      </button>
    </div>
  );
};

export default ButtonLang;

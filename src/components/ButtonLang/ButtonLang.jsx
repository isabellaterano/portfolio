import { useTranslation } from "react-i18next";
import eua from "../../assets/icon/eua.png";
import brasil from "../../assets/icon/brasil.png";
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
        <img src={eua} alt="flag eua" />
      </button>
      <span></span>
      <button className="lang__pt" onClick={() => changeLanguage("pt")}>
        <img src={brasil} alt="flag brasil" />
      </button>
    </div>
  );
};

export default ButtonLang;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ButtonLang.css";

const ButtonLang = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div className="button__lang">
      <button
        type="button"
        className={`lang__${currentLanguage}`}
        onClick={toggleLanguage}
      >
        {currentLanguage === "en" ? "English" : "Português"}
      </button>
    </div>
  );
};

export default ButtonLang;

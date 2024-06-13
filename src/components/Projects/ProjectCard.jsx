import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

const ProjectCard = () => {
  const { t } = useTranslation();
  return (
    <div className="productcard">
      <div className="wrapper">
        <div className="productcard__description">
          <h3>{t("productcard.title.medical")}</h3>
          <span>React - Express - MongoDB - Node - Tailwind - daisyUI</span>
          <div className="productcard__button">
            <a
              href="https://stayhealthy-7wyt.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/isabellaterano/medical-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="productcard__description">
          <h3>{t("productcard.title.estate")}</h3>

          <span>
            React - Javascript - Express - MongoDB - Node - Firebase - Tailwind
            <br />
          </span>
          <div className="productcard__button fix">
            <a
              href="https://dreamdwell-estate-ljy3.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/isabellaterano/dreamdwell-estate"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="productcard__description">
          <h3>{t("productcard.title.chair")}</h3>

          <span>
            React - Javascript - Express - MongoDB - Node - Stripe - Tailwind -
            daisyUI - Three.js
          </span>
          <div className="productcard__button fix-button">
            <a
              href="https://ecommerce-chair.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/isabellaterano/ecommerce-chair"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="productcard__description">
          <h3>{t("productcard.title.landing")}</h3>
          <span>React - Javascript - Tailwind - Three.js</span>
          <div className="productcard__button">
            <a
              href="https://digitalagency-forge.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/isabellaterano/digital-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="productcard__description">
          <h3>{t("productcard.title.qrcode")}</h3>
          <span>HTML - CSS - Javascript</span>
          <div className="productcard__button fix-btn">
            <a
              href="https://isabellaterano.github.io/qr-code/"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/isabellaterano/qr-code"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

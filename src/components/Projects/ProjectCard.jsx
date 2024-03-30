import { useTranslation } from "react-i18next";
import "./ProjectCard.css";
import { motion } from "framer-motion";

const ProjectCard = () => {
  const { t } = useTranslation();
  return (
    <div className="productcard">
      <div className="wrapper">
        <motion.div
          className="productcard-img"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src="src/assets/images/realestate.png" alt="real estate web" />
        </motion.div>

        <motion.div className="productcard__description">
          <h3>{t("productcard.title.estate")}</h3>
          <p>{t("productcard.description.estate")}</p>
          <span>React - Express - MongoDB - Node - Firebase - Tailwind</span>
          <div className="productcard__button">
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
        </motion.div>
      </div>
      <div className="wrapper">
        <motion.div
          className="productcard-img"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="src/assets/images/ecommercechair.png"
            alt="ecommerce website"
          />
        </motion.div>

        <motion.div className="productcard__description">
          <h3>{t("productcard.title.chair")}</h3>
          <p>{t("productcard.description.chair")}</p>
          <span>
            React - Express - MongoDB - Node - Stripe - Tailwind - daisyUI
          </span>
          <div className="productcard__button">
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
        </motion.div>
      </div>
      <div className="wrapper">
        <motion.div
          className="productcard-img"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src="src/assets/images/qrcode.png" alt="qrcode website" />
        </motion.div>

        <motion.div className="productcard__description">
          <h3>{t("productcard.title.qrcode")}</h3>
          <p>{t("productcard.description.qrcode")}</p>
          <span>HTML - CSS - Javascript</span>
          <div className="productcard__button">
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
        </motion.div>
      </div>
      <div className="wrapper">
        <motion.div
          className="productcard-img"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="src/assets/images/landingpage.png"
            alt="landing page museum"
          />
        </motion.div>

        <motion.div className="productcard__description">
          <h3>{t("productcard.title.landing")}</h3>
          <p>{t("productcard.description.landing")}</p>
          <span>HTML - SCSS - Javascript</span>
          <div className="productcard__button">
            <a
              href="https://landingpage-museum.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/isabellaterano/landingpage-museum"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </motion.div>
      </div>
      <div className="wrapper">
        <motion.div
          className="productcard-img"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src="src/assets/images/extension.png" alt="" />
        </motion.div>

        <motion.div className="productcard__description">
          <h3>{t("productcard.title.extension")}</h3>
          <p>{t("productcard.description.extension")}</p>
          <span>Javascript - CSS</span>
          <div className="productcard__button">
            <a
              href="https://github.com/isabellaterano/focusguard-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="productcard__btn"
            >
              Source
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;

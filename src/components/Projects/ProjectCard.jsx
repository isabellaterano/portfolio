import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import realEstate from "../../assets/images/realestate.png";
import ecommerce from "../../assets/images/ecommercechair.png";
import qrcode from "../../assets/images/qrcode.png";
import landingPage from "../../assets/images/landingpage.png";
import extension from "../../assets/images/extension.png";
import stayHealthy from "../../assets/images/stayhealthy.png";
import "./ProjectCard.css";

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
          <img src={stayHealthy} alt="website StayHealthy" />
        </motion.div>

        <motion.div className="productcard__description">
          <h3>{t("productcard.title.medical")}</h3>
          <p>{t("productcard.description.medical")}</p>
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
        </motion.div>
      </div>
      <div className="wrapper">
        <motion.div
          className="productcard-img"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={realEstate} alt="real estate web" />
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
          <img src={ecommerce} alt="ecommerce website" />
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
          <img src={qrcode} alt="qrcode website" />
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
          <img src={landingPage} alt="landing page museum" />
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
          <img src={extension} alt="" />
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

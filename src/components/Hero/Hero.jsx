import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Hero.css";
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="textContainer">
          <h2>Jasper Everett</h2>
          <h1>{t("hero.title")}</h1>
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {t("hero.p")}
      </motion.div>
    </div>
  );
};

export default Hero;

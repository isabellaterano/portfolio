import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2 + 0.4,
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-container">
          <motion.h2 custom={0} variants={textVariants}>
            Jasper Everett
          </motion.h2>
          <motion.h1 custom={1} variants={textVariants}>
            Software Engineer
          </motion.h1>
          <motion.p custom={2} variants={textVariants}>
            {t("herop")}
          </motion.p>
          <motion.div className="btn-group" custom={3} variants={textVariants}>
            <a href="#contact" className="btn-demo">
              {t("contact")}
            </a>
            <a href="#about" className="btn-demo">
              {t("heroabout")}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

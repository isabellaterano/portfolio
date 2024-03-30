import Skills from "./../Skills/Skills";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about" id="about">
      <h2 className="about__title">{t("about.title")}</h2>
      <div className="about-grid">
        <motion.div
          className="about-me"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p>{t("about.me")}</p>
        </motion.div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;

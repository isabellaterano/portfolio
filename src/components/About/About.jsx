import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import about from "../../assets/images/image.jpg";
import "./About.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about">
      <section className="about">
        <div className="image-section">
          <img src={about} alt="photo" width={150} height={200} />
        </div>
        <motion.div
          className="text-section"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{t("about")}</h1>
          <p>{t("about.me")}</p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

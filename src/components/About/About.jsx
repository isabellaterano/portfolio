import { useTranslation } from "react-i18next";
import about from "../../assets/images/image.png";
import "./About.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about">
      <h1>{t("about")}</h1>
      <div className="about-section">
        <div className="image-section">
          <img src={about} alt="photo" />
        </div>
        <div className="text-section">
          <p>{t("about.me")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

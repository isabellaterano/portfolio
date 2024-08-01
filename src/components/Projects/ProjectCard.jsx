import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

const projects = [
  {
    title: "productcard.title.medical",
    techStack: "React - Express - MongoDB - Node - Tailwind - daisyUI",
    demoLink: "https://stayhealthy-7wyt.onrender.com/",
    sourceLink: "https://github.com/isabellaterano/medical-booking",
  },
  {
    title: "productcard.title.estate",
    techStack:
      "React - Javascript - Express - MongoDB - Node - Firebase - Tailwind",
    demoLink: "https://dreamdwell-estate-ljy3.onrender.com",
    sourceLink: "https://github.com/isabellaterano/dreamdwell-estate",
  },
  {
    title: "productcard.title.chair",
    techStack:
      "React - Javascript - Express - MongoDB - Node - Stripe - Tailwind - daisyUI - Three.js",
    demoLink: "https://ecommerce-chair.onrender.com/",
    sourceLink: "https://github.com/isabellaterano/ecommerce-chair",
  },
  {
    title: "productcard.title.landing",
    techStack: "React - Javascript - Tailwind - Three.js",
    demoLink: "https://digitalagency-forge.netlify.app/",
    sourceLink: "https://github.com/isabellaterano/digital-agency",
  },
  {
    title: "productcard.title.qrcode",
    techStack: "HTML - CSS - Javascript",
    demoLink: "https://isabellaterano.github.io/qr-code/",
    sourceLink: "https://github.com/isabellaterano/qr-code",
  },
];

const ProjectCard = () => {
  const { t } = useTranslation();
  return (
    <div className="project-card-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-card__description">
            <h3>{t(project.title)}</h3>
            <span>{project.techStack}</span>
            <div className="project-card__buttons">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn"
              >
                {t("demo")}
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn"
              >
                {t("source")}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

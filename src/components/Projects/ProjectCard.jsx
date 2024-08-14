import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <div className="project-card__description">
        <h3>{t(project.title)}</h3>
        <span>{project.techStack}</span>
        <div className="btn">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo"
          >
            {t("demo")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

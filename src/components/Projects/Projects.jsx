import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="projects" id="projects">
      <span className="anchor" id="section1"></span>
      <h2 className="projects__title">{t("project")}</h2>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

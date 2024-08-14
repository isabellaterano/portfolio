import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects" id="projects">
      <span className="anchor" id="section1"></span>
      <h2 className="projects__title">{t("project")}</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "productcard.title.medical",
    techStack: "React - Express - MongoDB - Node - Tailwind - daisyUI",
    demoLink: "https://stayhealthy-7wyt.onrender.com/",
  },
  {
    title: "productcard.title.estate",
    techStack:
      "React - Javascript - Express - MongoDB - Node - Firebase - Tailwind",
    demoLink: "https://dreamdwell-estate-ljy3.onrender.com",
  },
  {
    title: "productcard.title.chair",
    techStack:
      "React - Javascript - Express - MongoDB - Node - Stripe - Tailwind - daisyUI - Three.js",
    demoLink: "https://ecommerce-chair.onrender.com/",
  },
  {
    title: "productcard.title.landing",
    techStack: "React - Javascript - Tailwind - Three.js",
    demoLink: "https://digitalagency-forge.netlify.app/",
  },
];

export default Projects;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Experience.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">{t("experience.title")}</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderColor: "#ef1313" }}
          contentArrowStyle={{ borderRight: "7px solid #ef1313" }}
          date="2018 - present"
          iconStyle={{ background: "#ddd", color: "#000000" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.senior")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.senior.location")}
          </h4>
          <p>{t("experience.senior.description")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2018"
          iconStyle={{ background: "#ddd", color: "#000000" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.fullstack")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.fullstack.location")}
          </h4>
          <p>{t("experience.fullstack.description")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2015"
          iconStyle={{ background: "#ddd", color: "#000000" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.junior")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.junior.location")}
          </h4>
          <p>{t("experience.junior.description")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2012"
          iconStyle={{ background: "#ddd", color: "#000000" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.education")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.education.location")}
          </h4>
          <p>{t("experience.education.description")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

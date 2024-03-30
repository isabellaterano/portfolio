import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import "./Sidebar.css";

const Sidebar = ({ open, toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <nav className={`mobile-menu ${open ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile__menu-container">
        <Link className="mobile__logo">IT</Link>

        <ul>
          <li>
            <Link to="#hero" className="nav__links active">
              Home
            </Link>
          </li>

          <li>
            <Link to="#projects" className="nav__links active">
              {t("sidebar.project")}
            </Link>
          </li>
          <li>
            <Link to="#about" className="nav__links active">
              {t("sidebar.about")}
            </Link>
          </li>
          <li>
            <Link to="#contact" className="nav__links active">
              {t("sidebar.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
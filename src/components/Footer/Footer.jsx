import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://github.com/isabellaterano"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-icon"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://github.com/isabellaterano"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-icon"
        >
          <FaLinkedin className="icon" />
        </a>
        <button
          onClick={() => (window.location = "mailto:isabellaiterano@gmail.com")}
          className="footer__social-icon"
        >
          <FaEnvelope className="icon" />
        </button>
      </div>
      <div className="footer__copyright">
        <p>
          &#169; {new Date().getFullYear()} Jasper Everett. Made by:
          <a href="https://isabellaterano.vercel.app/en"> Isabella.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

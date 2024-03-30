import { Envelope, GithubLogo } from "@phosphor-icons/react";
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
          <GithubLogo size={28} alt="github icon" />
        </a>

        <button
          onClick={() => (window.location = "mailto:isabellaiterano@gmail.com")}
          className="footer__social-icon"
        >
          <Envelope size={28} alt="Envelope icon" />
        </button>
      </div>

      <div className="footer__copyright">
        <p>Copyright &#169; {new Date().getFullYear()} Isabella Terano</p>
      </div>
    </footer>
  );
};

export default Footer;

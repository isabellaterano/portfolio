import email from "../../assets/icon/envelope.svg";
import github from "../../assets/icon/github.svg";
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
          <img src={github} alt="github icon" />
        </a>

        <button
          onClick={() => (window.location = "mailto:isabellaiterano@gmail.com")}
          className="footer__social-icon"
        >
          <img src={email} alt="email icon" />
        </button>
      </div>

      <div className="footer__copyright">
        <p>Copyright &#169; {new Date().getFullYear()} Isabella Terano</p>
      </div>
    </footer>
  );
};

export default Footer;

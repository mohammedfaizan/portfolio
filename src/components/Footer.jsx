import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/main.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copyright">© Mohammed Faizan</div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/mohammed-faizan-439678202/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mohammedfaizan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a href="mailto:faizan1999.in@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

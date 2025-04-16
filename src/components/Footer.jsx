import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles/main.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copyright">© Your Name</div>
        <div className="footer-social">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a href="mailto:your.email@example.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import myLogo from "../assets/logowhitecropped-removebg-preview.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={myLogo} alt="name logo" width={65} height={50} />
        </Link>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link active">
            Home
          </Link>
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

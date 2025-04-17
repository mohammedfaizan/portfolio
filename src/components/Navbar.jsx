// src/components/Navbar.jsx
import { useState } from "react";
// Only import NavLink if Link is not used elsewhere in this component
import { NavLink, Link } from "react-router-dom"; // Keep Link for the logo if preferred
import "../styles/main.css";
import myLogo from "../assets/logowhitecropped-removebg-preview.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked (useful for mobile)
  const closeMenu = () => setIsMenuOpen(false);

  // Function to determine the className for NavLink
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "navbar-link active" : "navbar-link";
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Using Link for the logo is fine */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={myLogo} alt="Mohammed Faizan Logo" width={65} height={50} />
        </Link>

        {/* Toggle button for mobile menu */}
        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Accessibility improvement
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links container */}
        {/* Use NavLink for all navigation items */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink to="/" className={getNavLinkClass} onClick={closeMenu} end>
            {" "}
            {/* Use function and add 'end' prop */}
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          {/* Add other NavLinks here if needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import "../Stylesheets/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link className="HBlistItem" to="/">
          Home
        </Link>
        <Link to="/Pages/About">About Me</Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

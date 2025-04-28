import { useState } from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/navbar.css";

const HBmenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <> 
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <button className="closeButton" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <Link className="HBlistItem" to="/Pages/Home">
              Home
            </Link>
            <Link className="HBlistItem" to="/Pages/About">About Me</Link>
            <div className="horizontalLine"></div>
            <div className="navSocials">
          
            <div className="linkContainer">
            <img src="IconLinkedIn.png" alt="LinkedIn" />
            <a href="">LinkedIn</a></div>

            <div className="linkContainer">
            <img src="IconGithub.png" alt="IconGithub" />
            <a href="">Github</a></div>

            <div className="linkContainer">
            <img src="IconInstagram.png" alt="IconInstagram" />
            <a href="">Instagram</a></div>

            <div className="linkContainer">
            <img src="IconEmail.png" alt="IconEmail" />
            <a href="rebecca.labeeb@gmail.com" type="email">Email</a></div>
        </div></div>
            
    
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          </>
        
)}
 
export default HBmenu;
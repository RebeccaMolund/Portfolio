import { useState } from "react";
import { Link } from "react-router-dom";

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
            <Link className="HBlistItem" to="/Pages/About">About Me</Link></div>
            
    
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          </>
        
)}
 
export default HBmenu;
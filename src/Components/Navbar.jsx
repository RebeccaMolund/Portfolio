import { Link } from "react-router-dom";
import "../Stylesheets/navbar.css";
import HBmenu from "./HBmenu";

const Navbar = () => {

  return (
    <nav className="navbar">
      <img src="/Frame 10.png" alt="" />
      <HBmenu />
        <div className="navSocials">
          
          <div className="linkContainer">
          <img src="IconLinkedIn.png" alt="LinkedIn" />
          <a href="">LinkedIn</a></div>

          <div className="linkContainer">
          <img src="IconLinkedIn.png" alt="LinkedIn" />
          <a href="">Github</a></div>

          <div className="linkContainer">
          <img src="IconLinkedIn.png" alt="LinkedIn" />
          <a href="">Instagram</a></div>

          <div className="linkContainer">
          <img src="IconLinkedIn.png" alt="LinkedIn" />
          <a href="rebecca.labeeb@gmail.com" type="email">Email</a></div>
        </div>
    </nav>
  );
};

export default Navbar;

import "../Stylesheets/navbar.css";
import HBmenu from "./HBmenu";

const Navbar = () => {

  return (
    <nav className="navbar">
      <img className="logoImg" src="/Frame 10.png" alt="" />
      <HBmenu />    
    </nav>
  );
};

export default Navbar;

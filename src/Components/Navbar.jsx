import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Pages/About">About Me</Link>
    </nav>
  );
};

export default Navbar;

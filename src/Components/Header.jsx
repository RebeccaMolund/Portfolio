import Navbar from "./Navbar";
import "../Stylesheets/header.css";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="headerContent">
        <div className="headerText">
          <h1>Creative,</h1>
          <h1 className="gradientTitle">Accessible,</h1>
          <h1>& Playful UX</h1>
        </div>
        <ProfilePicture />
      </div>
    </header>
  );
};

export default Header;

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="headerContent">
        <h1>Creative,</h1>
        <h1 className="gradientTitle">Accessible,</h1>
        <h1>& Playful UX</h1>
        <div className="profilePhotoContainer">
          <img
            className="profile-img"
            src="../photos/Rebecca-profile.png"
            alt="Profile Image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

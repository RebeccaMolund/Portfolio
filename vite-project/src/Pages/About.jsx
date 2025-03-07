import React from "react";

const About = () => {
  return (
    <>
      <main>
        <div className="main-content">
          <img
            className="profile-img"
            src="../photos/Rebecca-profile.png"
            alt="Profile Image"
          />
          <h2>About me</h2>
          <p className="Aboutme-p">
            My name is Rebecca and I'm a UX/UI designer with a passion for 2D
            art, graphic art and games. I'm currently a student at Chas Academy
            and I'm at the same time working on a game as a UX/UI designer at a
            game studio.
            <br />
            <br />
            I'm based in Stockholm, however I'm open for remote work.
          </p>
          <br />
          <p>
            Contact me at: rebecca.labeeb@gmail.com
            <br />
            <br />
          </p>
        </div>
      </main>
    </>
  );
};

export default About;

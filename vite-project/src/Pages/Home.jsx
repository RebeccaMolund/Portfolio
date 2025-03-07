import React from "react";
import { Link } from "react-router-dom";
import ProjectCards from "../Components/ProjectCards";

const Home = () => {
  return (
    <>
      <div className="main-content">
        <Link to="/Pages/Emovere">
          <ProjectCards
            src="../photos/EmovereFront.png"
            alt="UI design"
            value2="UI design"
            value4="Design System,
            Visual Design,
            Branding"
          />
        </Link>

        <Link to="/Pages/Casteel">
          <ProjectCards
            src="../photos/Casteel.png"
            alt="2D art"
            value2="Illustration"
            value4="2D art"
          />
        </Link>

        <Link to="/Pages/Nova">
          <ProjectCards
            src="../photos/Nova.png"
            alt="2D art"
            value2="Illustration"
            value4="2D art"
          />
        </Link>
      </div>
    </>
  );
};

export default Home;

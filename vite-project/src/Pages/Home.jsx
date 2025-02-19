import React from "react";
import Header from "/src/Components/Header";
import Navbar from "/src/Components/Navbar";
import Footer from "/src/Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="main-content">
        <div className="card-section">
          <a href="project-link">
            <div className="img-container">
              <img
                className="img-project"
                src="./photos/Casteel.png"
                alt="2D art"
              />
            </div>
          </a>

          <h3>Illustration</h3>
          <h4>2D art</h4>
        </div>

        <div className="card-section">
          <a href="project-link">
            <div className="img-container">
              <img
                className="img-project"
                src="./photos/Solas.jpg"
                alt="2D art2"
              />
            </div>
          </a>
          <h3>Illustration</h3>
          <h4>2D art</h4>
        </div>

        <div className="card-section">
          <a href="project-link">
            <div className="img-container">
              <img
                className="img-project"
                src="./photos/Nova.png"
                alt="2D art"
              />
            </div>
          </a>
          <h3>Illustration</h3>
          <h4>2D art</h4>
        </div>

        <div className="card-section">
          <a href="project-link">
            <div className="img-container">
              <img
                className="img-project"
                src="./photos/Astarion_Portraits (2).png"
                alt="2D art"
              />
            </div>
          </a>
          <h3>Illustration</h3>
          <h4>2D art</h4>
        </div>

        <div className="card-section">
          <a href="project-link">
            <div className="img-container">
              <img
                className="img-project"
                src="./photos/Emovere.png"
                alt="UI design"
              />
            </div>
          </a>
          <a>UI design</a>
          <h4>
            Design System
            <br />
            Visual Design
            <br />
            Branding
          </h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

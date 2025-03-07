import React from "react";

const Emovere = () => {
  return (
    <>
      <div className="main-content">
        <img
          src="../photos/EmovereFront.png"
          className="emovereFront"
          alt="Emovere Front"
        />
        <img
          src="../photos/Designsystem.png"
          className="emovereFront"
          alt="Emovere Front"
        />
        <img
          src="../photos/Designsystem3.png"
          className="emovereFront"
          alt="Emovere Front"
        />
        <img
          src="../photos/Designsystem4.png"
          className="emovereFront"
          alt="Emovere Front"
        />
        <video width="200" height="400" controls>
          <source src="../photos/prototypeEmovere.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Emovere;

import React from "react";
import Header from "/src/Components/Header";
import Navbar from "/src/Components/Navbar";
import Footer from "/src/Components/Footer";


const Emovere = () => {
    return ( 
         <>
              <Header />
              <Navbar />
              <div className="main-content">
              <img src="../photos/EmovereFront.png" className="emovereFront" alt="Emovere Front" />
              <img src="../photos/Designsystem.png" className="emovereFront" alt="Emovere Front" />
              <img src="../photos/Designsystem3.png" className="emovereFront" alt="Emovere Front" />
              <img src="../photos/Designsystem4.png" className="emovereFront" alt="Emovere Front" />
              </div>
              <Footer />
        </>
     );
}
 
export default Emovere;
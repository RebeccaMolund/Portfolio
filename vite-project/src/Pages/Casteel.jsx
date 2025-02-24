import React from "react";
import Header from "/src/Components/Header";
import Navbar from "/src/Components/Navbar";
import Footer from "/src/Components/Footer";


const Casteel = () => {
    return ( 
         <>
              <Header />
              <Navbar />
              <div>
              <img src="../photos/Casteel.png" className="Casteel" alt="Casteel" />
              </div>
              <Footer />
        </>
     );
}
 
export default Casteel;
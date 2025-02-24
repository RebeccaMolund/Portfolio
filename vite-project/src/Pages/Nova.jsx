import React from "react";
import Header from "/src/Components/Header";
import Navbar from "/src/Components/Navbar";
import Footer from "/src/Components/Footer";


const Nova = () => {
    return ( 
         <>
              <Header />
              <Navbar />
              <div>
              <img src="../photos/Nova.png" className="Nova" alt="Nova" />
              </div>
              <Footer />
        </>
     );
}
 
export default Nova;
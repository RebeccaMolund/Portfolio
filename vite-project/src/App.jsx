import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Emovere from "./Pages/Emovere";
import Casteel from "./Pages/Casteel";
import Nova from "./Pages/Nova";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Pages/About" element={<About />} />
          <Route path="Pages/Emovere" element={<Emovere />} />
          <Route path="Pages/Casteel" element={<Casteel />} />
          <Route path="Pages/Casteel" element={<Nova />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

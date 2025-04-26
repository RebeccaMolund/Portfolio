import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Stylesheets/app.css";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Pages/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

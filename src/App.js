import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Info from "./components/Info/Info";
import About from "./components/Info/About";
import ADAInfo from "./components/Info/ADAInfo";
import Apparel from "./components/Info/Apparel";
import FAQ from "./components/Info/FAQ";
import RegistrationInfo from "./components/Info/RegistrationInfo";
import SunGodBabies from "./components/Info/SunGodBabies";
import SunGodForACause from "./components/Info/SunGodForACause";
import Transportation from "./components/Info/Transportation";
import Volunteers from "./components/Info/Volunteers";
import Lineup from "./components/Lineup/Lineup";
import Safety from "./components/Safety/Safety";
import Sponsors from "./components/Sponsors/Sponsors";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/info" element={<Info />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
          <Route path="/ADAinfo" element={<ADAInfo />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/registration-info" element={<RegistrationInfo />} />
          <Route path="/sun-god-for-a-cause" element={<SunGodForACause />} />
          <Route path="/sun-god-babies" element={<SunGodBabies />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

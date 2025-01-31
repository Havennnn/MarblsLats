import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom"; // Import HashRouter
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import Skills from "./component/Skills.jsx";
import SkillsBox from "./component/SkillsBox.jsx";
import About from "./component/About.jsx";
import Project from "./component/Project.jsx";
import Footer from "./component/Footer.jsx";
import ScrollIndicator from "./component/ScrollIndicator.jsx";
import StickyNavbar from "./component/StickyNavbar.jsx";
import Preloader from "./component/Preloader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <HashRouter>
      {loading ? (
        <Preloader />
      ) : (
        <div
          id="home"
          className="relative px-8 lg:px-12 pt-6 bg-[#1E1E1E] overflow-hidden"
        >
          <Navbar />
          <ScrollIndicator />
          <Home />
          <StickyNavbar />
          <div id="skills">
            <Skills />
            <SkillsBox />
          </div>
          <div id="contact">
            <About />
          </div>
          <div id="projects">
            <Project />
          </div>
          <Footer />
        </div>
      )}
    </HashRouter>
  );
};

export default App;

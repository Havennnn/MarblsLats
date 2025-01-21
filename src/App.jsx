import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Skills from './component/Skills.jsx';
import SkillsBox from './component/SkillsBox.jsx';
import About from './component/About.jsx';
import Project from './component/Project.jsx';
import Footer from './component/Footer.jsx';
import ScrollIndicator from './component/ScrollIndicator.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div id='home' className="relative px-8 lg:px-12 pt-6 bg-[#1E1E1E] overflow-hidden">
        <Navbar />
        <ScrollIndicator />
        <Home />
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
    </BrowserRouter>
  );
};

export default App;

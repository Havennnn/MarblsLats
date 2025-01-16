import React from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Skills from './component/Skills.jsx';
import About from './component/About.jsx';
import SkillsBox from './component/SkillsBox.jsx';
import Project from './component/Project.jsx';
import Footer from './component/Footer.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div id='home' className="relative px-8 lg:px-12 pt-6 bg-[#1E1E1E] overflow-hidden">
      <Navbar />
      <Home />
      <Skills />
      <SkillsBox />
      <About />
      <Project />
      <Footer />
    </div>
  );
};

export default App;

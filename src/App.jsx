import React from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Skills from './component/Skills.jsx';
import About from './component/About.jsx';
import SkillsBox from './component/SkillsBox.jsx';

const App = () => {
  return (
    <div className="relative p-8 lg:p-12 bg-[#1E1E1E]">
      <Navbar />
      <Home />
      <Skills />
      <SkillsBox />
      <About />
    </div>
  );
};

export default App;

import React from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Skills from './component/Skills.jsx';

const App = () => {
  return (
    <div className="relative p-8 lg:p-12 bg-[#1E1E1E]">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
};

export default App;

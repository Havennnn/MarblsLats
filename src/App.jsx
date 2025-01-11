import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';

const App = () => {
  return (
<div className="relative h-[700px] xl:h-[100vh] p-8 lg:p-12 bg-[#1E1E1E]">
      <Navbar /> 
      <div className="h-full w-full bg-white transition-all duration-500 ease-in-out rounded-tl-[1.5rem] rounded-br-[1.5rem] border-5">
          <Home />
      </div>
    </div>
  );
};

export default App;

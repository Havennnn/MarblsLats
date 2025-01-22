import React from 'react';
import logo from '../assets/Logo.svg';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-dgray z-50">
      <div className="animate-spin rounded-full border-t-4 border-white border-solid h-24 w-24"></div>
      <img src={logo} alt="Loading" className="absolute h-12 w-12" />
    </div>
  );
};

export default Preloader;

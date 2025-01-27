import React from "react";
import logo from "../assets/Logo.svg";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-dgray z-50">
      <div className="animate-spin rounded-full border-b-4 border-white border-solid h-24 w-24 lg:h-32 lg:w-32 flex justify-center items-center">
      <div className="animate-spin rounded-full border-t-4 border-white border-solid h-[72px] w-[72px] lg:h-24 lg:w-24"></div>
      </div>
      <img src={logo} alt="Loading" className="absolute h-10 w-10 lg:h-12 lg:w-12" />
    </div>
  );
};

export default Preloader;

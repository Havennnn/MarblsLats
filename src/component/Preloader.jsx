import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.svg";
import logoFilled from "../assets/LogoFilled.svg";

const Preloader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-dgray z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="animate-spin rounded-full border-b-4 border-white border-solid h-[90px] w-[90px] lg:h-32 lg:w-32 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="animate-spin rounded-full border-t-4 border-white border-solid h-[72px] w-[72px] lg:h-24 lg:w-24"
        ></motion.div>
      </motion.div>
      <motion.img
        src={logo}
        alt="Loading"
        className="absolute h-8 w-8 lg:h-12 lg:w-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

const WelcomeScreen = () => {
  return (
    <div className="absolute h-screen w-screen bg-white overflow-hidden z-50">
      <div className="flex justify-center items-center h-full w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-dgray font-bold flex justify-center items-center gap-2"
        >
          <img src={logoFilled} className="w-6 h-6 md:h-8 md:w-8"></img>
          <p className="text-xl md:text-3xl">
            Lats<span className="text-2xl md:text-4xl text-gray">Marbls</span>
          </p>
        </motion.h1>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <WelcomeScreen key="welcome" />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default App;

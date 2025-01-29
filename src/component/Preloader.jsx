import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.svg";
import logoFilled from "../assets/LogoFilled.svg";

const Preloader = () => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-dgray z-50"
    >
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="animate-spin rounded-full border-b-4 border-white border-solid h-24 w-24 lg:h-32 lg:w-32 flex justify-center items-center">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="animate-spin rounded-full border-t-4 border-white border-solid h-[72px] w-[72px] lg:h-24 lg:w-24"></motion.div>
      </motion.div>
      <motion.img
        src={logo}
        alt="Loading"
        className="absolute h-10 w-10 lg:h-12 lg:w-12"
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
    <div
      className="flex justify-center items-center h-screen bg-white overflow-hidden"
    >
      <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeInOut" }} 
      className="text-dgray font-bold flex justify-center items-center gap-2">
        <img src={logoFilled} className="h-8 w-8"></img><p className="text-3xl">Lats<span className="text-4xl text-gray">Marbls</span></p></motion.h1>
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

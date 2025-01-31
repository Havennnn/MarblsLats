import React, { useState, useEffect, useRef } from "react";

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current || !placeholderRef.current) return;

      const navbarTop = placeholderRef.current.getBoundingClientRect().top;

      if (navbarTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, offset = 20) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex justify-center items-center mt-10">
      <div ref={placeholderRef} className="h-12"></div>

      <div
        id="sticky-navbar"
        ref={navbarRef}
        className={`h-8 px-8 bg-white transition-all duration-700 ease-linear rounded-[1.5rem] shadow-lg 
        ${
          isSticky
            ? "fixed flex justify-between items-center top-2 inset-x-0 mx-auto z-10 scale-100 bg-opacity-60 backdrop-blur-sm w-[92%] shadow-2xl"
            : "relative w-full scale-full flex justify-center items-center border"
        }`}
        style={{
          transition: "top 0.4s ease, transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {isSticky ? (
          <>
          <div className="flex gap-1 items-center justify-center">
            <img
              src="/LogoFilled.svg"
              alt="logo"
              className="w-6 h-6 opacity-100"
            />
            <h1 className="font-bold text-dgray hidden md:block">
              Lats<span className="text-gray text-xl">Marbls</span>
            </h1>
            </div>
            <div className="justify-between items-center hidden md:flex">
              <ul className="flex gap-2 text-dgray">
                <li
                  onClick={() => scrollToSection("home")}
                  className="border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:transform hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </li>
                <li
                  onClick={() => scrollToSection("skills")}
                  className="border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:transform hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-code"></i>
                  <p>Skills</p>
                </li>
                <li
                  onClick={() => scrollToSection("contact")}
                  className="border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:transform hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-phone"></i>
                  <p>Contact</p>
                </li>
                <li
                  onClick={() => scrollToSection("projects")}
                  className="border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:transform hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-folder"></i>
                  <p>Projects</p>
                </li>
              </ul>
            </div>
            <div className="justify-between items-center flex md:hidden">
              <ul className="flex gap-1 text-dgray transition-all">
                <li
                  onClick={() => scrollToSection("home")}
                  className="group border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-house transition-all duration-300 py-1"></i>
                  <span className="hidden group-hover:inline transition-all duration-300">
                    Home
                  </span>
                </li>
                <li
                  onClick={() => scrollToSection("skills")}
                  className="group border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-code transition-all duration-300 py-1"></i>
                  <span className="hidden group-hover:inline transition-all duration-300">
                    Skills
                  </span>
                </li>
                <li
                  onClick={() => scrollToSection("contact")}
                  className="group border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-phone transition-all duration-300 py-1"></i>
                  <span className="hidden group-hover:inline transition-all duration-300">
                    Contact
                  </span>
                </li>
                <li
                  onClick={() => scrollToSection("projects")}
                  className="group border px-3 rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300"
                >
                  <i className="fa-solid fa-folder transition-all duration-300 py-1"></i>
                  <span className="hidden group-hover:inline transition-all duration-300">
                    Projects
                  </span>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <img
              src="/LogoFilled.svg"
              alt="logo filled"
              className="w-6 h-6 opacity-100"
            />
            <h1 className="font-bold text-dgray">
              Lats<span className="text-gray text-xl">Marbls</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyNavbar;

import React from "react";
import Lottie from "lottie-react";
import webDev from "../assets/WebDev.json";
import uiUxDes from "../assets/Uiuxdes.json";
import cyberSec from "../assets/cyberSec.json";
import probSolv from "../assets/probSolv.json";

const SkillsBox = () => {
  return (
    <div className="flex mt-10 justify-center items-center">
      <div className="grid grid-cols-2 md:flex md:flex-row gap-5 w-full items-stretch justify-stretch">
        <div className="text-dgray bg-white font-bold p-4 w-full lg:w-1/3 flex flex-col items-center justify-center rounded-[1rem] border-[1.5px] transition-all duration-500 ease-in-out shadow">
          <div className="w-24">
            <Lottie animationData={webDev} loop={true} />
          </div>
          <h1 className="font-bold text-center">Web Development</h1>
          <p className="pt-1 font-normal text-center pb-3 text-[10px] md:text-[12px]">
            Crafting responsive, user-friendly websites using modern frameworks
            and tools.
          </p>
        </div>
        <div className="text-dgray bg-white font-bold p-4 w-full lg:w-1/3 flex flex-col items-center justify-center rounded-[1rem] border-[1.5px] transition-all duration-500 ease-in-out shadow">
          <div className="pt-3 pb-3 w-24">
            <Lottie animationData={uiUxDes} loop={true} />
          </div>
          <h1 className="font-bold text-center">UX/UI Design</h1>
          <p className="pt-1 font-normal text-center pb-3 text-[10px] md:text-[12px]">
            Designing intuitive interfaces to enhance user experience and
            engagement.
          </p>
        </div>
        <div className="text-dgray bg-white font-bold pt-3 pb-4 px-4 w-full lg:w-1/3 flex flex-col items-center justify-center rounded-[1rem] border-[1.5px] transition-all duration-500 ease-in-out shadow">
          <div className="w-24 pt-2 pb-4">
            <Lottie animationData={cyberSec} loop={true} />
          </div>
          <h1 className="font-bold text-center">Cybersecurity</h1>
          <p className="pt-1 font-normal text-center pb-3 text-[10px] md:text-[12px]">
            Implementing secure practices to protect applications and user data.
          </p>
        </div>
        <div className="text-dgray bg-white font-bold pt-3 pb-4 px-4 w-full lg:w-1/3 flex flex-col items-center justify-center rounded-[1rem] border-[1.5px] transition-all duration-500 ease-in-out shadow">
          <div className="w-24 pt-1 pb-2">
            <Lottie animationData={probSolv} loop={true} />
          </div>
          <h1 className="font-bold text-center">Problem Solving</h1>
          <p className="pt-1 font-normal text-center pb-3 text-[10px] md:text-[12px]">
            Analyzing complex challenges and delivering solutions tailored to
            user needs and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;

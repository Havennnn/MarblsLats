import React from "react";
import mernAuth from "../assets/mernAuth.jpg";
import storyWeaver from "../assets/storyWeaver.jpg";
import curatorArt from "../assets/curatorArt.jpg";
import saasLandingPage from "../assets/saasLandingPage.jpg";

const Project = () => {
  return (
    <section className="pt-10">
      <div className="relative flex flex-col md:flex-row w-full h-full px-6 sm:px-14 py-10 bg-white rounded-[1.5rem] justify-center items-center">
        <div className="absolute top-0 flex px-3 pb-3 bg-dgray rounded-bl-[1.5rem] rounded-br-[1.5rem] element16">
          <div className="flex gap-3 justify-center items-center element17">
            <i className="fa-solid fa-folder text-3xl text-white"></i>
            <h1 className="text-4xl text-white font-bold">Projects</h1>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={mernAuth}
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm"
              />
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-xl font-semibold text-dgray">Login Auth</h3>
                <div className="flex items-center gap-2 text-lg">
                  <a
                    href="https://github.com/Havennnn/mern-auth"
                    className="text-dgray flex items-center justify-center rounded-full"
                  >
                    <i className="fa-brands fa-github text-2xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                A fully functional authentication system built using the MERN
                stack with secure features such as email verification and
                password reset via a 6-digit OTP. react, node, express,tailwind
                css, mongodb
              </p>
              <p className="mt-5 text-sm font-medium">Technology Used:</p>
              <div className="mt-3 flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-vitejs-plain"></i>
                  Vite
                </span>
                <span className="text-sm px-3 flex gap-1 justify-center items-center">
                  <i className="devicon-nodejs-plain"></i>
                  Node.js
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-express-original"></i>
                  Express.js
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-mongodb-plain"></i>
                  MongoDB
                </span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={storyWeaver}
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm"
              />
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-xl font-semibold text-dgray">
                  Story Weaver
                </h3>
                <div className="flex items-center gap-2 text-lg">
                  <a
                    href="https://github.com/Havennnn/StoryWeaver"
                    className="text-dgray flex items-center justify-center rounded-full"
                  >
                    <i className="fa-brands fa-github text-2xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                A modern and dynamic storytelling platform built using React,
                Tailwind CSS, and React Router. Story Weaver combines
                cutting-edge technology with creativity, integrating the Google
                Generative AI API for crafting immersive narratives.
              </p>
              <p className="mt-5 text-sm font-medium">Technology Used:</p>
              <div className="mt-3 flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-vitejs-plain"></i>
                  Vite
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-nodejs-plain"></i>
                  Node.js
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-google-plain"></i>
                  Gemini API
                </span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={curatorArt}
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm"
              />
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-xl font-semibold text-dgray">CuratorArt</h3>
                <div className="flex items-center gap-2 text-lg">
                  <a
                    href="https://github.com/Havennnn/curatorArt"
                    className="text-dgray flex items-center justify-center rounded-full"
                  >
                    <i className="fa-brands fa-github text-2xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                A sleek and responsive art curation platform designed using
                React, Node.js, and Tailwind CSS. This website allows users to
                explore through a clean and modern interface.
              </p>
                <p className="mt-5 text-sm font-medium">Technology Used:</p>
                <div className="mt-3 flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                  <span className="text-sm flex gap-1 justify-center items-center">
                    <i className="devicon-react-original"></i>
                    React
                  </span>
                  <span className="text-sm flex gap-1 justify-center items-center">
                    <i className="devicon-vitejs-plain"></i>
                    Vite
                  </span>
                  <span className="text-sm flex gap-1 justify-center items-center">
                    <i className="devicon-tailwindcss-plain"></i>
                    TailwindCSS
                  </span>
                </div>
            </div>

            {/* Project Card 4 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={saasLandingPage}
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm"
              />
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-xl font-semibold text-dgray">
                  Saas Landing Page
                </h3>
                <div className="flex items-center gap-2 text-lg text-dgray">
                  <a
                    href="https://github.com/Havennnn/lightsaas-landingpage"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-brands fa-github text-2xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                  </a>
                  <a
                    href="https://lightsaas-landingpage-tau.vercel.app"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-solid fa-globe text-2xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                A modern landing page designed using React, Framer, and Tailwind
                CSS. This website allows users to explore through a clean and
                modern interface.
              </p>
              <p className="mt-5 text-sm font-medium">Technology Used:</p>
              <div className="mt-3 flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-nextjs-plain"></i>
                  Next
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
                <span className="text-sm flex gap-1 justify-center items-center">
                  <i className="devicon-framermotion-original"></i>
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

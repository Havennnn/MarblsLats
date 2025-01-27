import React, { useState, useEffect } from "react";
import cv from "../assets/MarableLatrell_Intern_Resume.pdf";
import heroBg from "../assets/Herobg-new2.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const DownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "MarableLatrell_CV.pdf";
    link.click();
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setEmail("");
    setMessage("");
    setStatus("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "772012b3-85ef-4d30-b354-b9c9c07587ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message has been sent successfully!");
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [showModal]);

  const slideIn = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
  };

  return (
    <section className="h-[700px] xl:h-[93vh] bg-white transition-all duration-500 ease-in-out rounded-tl-[1.5rem] rounded-br-[1.5rem]">
      <div className="relative flex h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="relative flex w-full flex-col gap-1 px-6 sm:px-14 md:w-[55%] md:py-24 lg:w-[58%] my-auto animate-fadeIn"
        >
          <p className="font-bold text-gray animate-pulse">GOOD DAY!</p>
          <h1 className="font-bold text-5xl text-dgray text-shadow">
            I'm Latrell
          </h1>
          <p className="font-bold text-2xl text-gray animate-pulse">
            WEB DEVELOPER
          </p>
          <p className="text-dgray">
            I am a passionate and innovative web developer with a knack for
            creating captivating and functional websites. With a blend of
            creativity and technical expertise, I bring digital ideas to life
            and deliver seamless online experiences.
          </p>

          <div className="py-4 flex items-center gap-3">
            <button
              className="flex items-center justify-center w-32 gap-2 p-2 text-white bg-dgray rounded-xl shadow-xl hover:transform hover:scale-110 transition duration-300 ease-in-out"
              onClick={DownloadCV}
            >
              <i className="fa-solid fa-file-arrow-down text-sm text-white"></i>
              Resume
            </button>
            <a
              className="flex items-center justify-center w-32 gap-2 p-2 text-white bg-dgray rounded-xl shadow-xl hover:transform hover:scale-110 transition duration-300 ease-in-out"
              href="#projects"
            >
              <i className="fa-solid fa-folder text-sm text-white"></i>
              Projects
            </a>
          </div>
        </motion.div>

        <div className="absolute left-0 bottom-0 flex pr-3 py-3 bg-dgray rounded-tr-xl element3">
          <div className="element4">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={slideIn}
              className="flex items-center justify-center gap-2 sm:gap-3"
            >
              <li className="flex mt-1">
                <a
                  href="https://github.com/Havennnn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-github text-white text-3xl sm:text-5xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li className="flex mt-1">
                <a
                  href="https://www.linkedin.com/in/latrell-marable-b43a37256/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin text-white text-3xl sm:text-5xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li
                onClick={openModal}
                className="border-black flex items-center justify-around h-[27px] sm:h-[43px] sm:mt-1 gap-2 px-3 sm:px-6 text-dgray bg-white rounded hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <i className="fas fa-envelope text-xl"></i>
                <p className="text-xl font-semibold text-dgray">Contact</p>
              </li>
            </motion.ul>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 bg-dgray bg-opacity-50 flex justify-center items-center shadow">
            <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
              <div className="relative flex justify-between items-baseline mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 ">
                  Contact Me
                </h2>
                <button
                  onClick={closeModal}
                  className="absolute right-0 mt-1 text-gray-600 text-white rounded-full bg-dgray w-7 h-7 flex justify-center items-center"
                >
                  X
                </button>
              </div>

              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-2 bg-dgray text-white rounded-xl hover:transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  Submit Form
                </button>
              </form>
              <p className="text-center italic text-sm mt-2">
                *It might take a while to send please wait*
              </p>
              {status && (
                <div className="mt-4 text-center text-xl font-semibold text-green-600">
                  {status}
                </div>
              )}
            </div>
          </div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="right-14 bottom-1/2 transform translate-y-1/2 md:w-[20rem] lg:w-[28rem] xl:w-[32rem] my-auto hidden md:block animate-fadeIn"
        >
          <Lottie animationData={heroBg} loop={true} />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

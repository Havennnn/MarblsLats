import React, { useState, useEffect } from "react";
import heroBg from "../assets/Herobg-new.json";
import Lottie from "lottie-react";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

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
        }, 1000);
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

  return (
    <section className="flex flex-col md:flex-row pt-10 w-full h-full gap-5">
      <div className="relative flex w-full md:w-3/6 h-full bg-white rounded-bl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[1.5rem] flex-grow">
        <div className="flex element13">
          <div className="absolute flex pr-3 py-3 gap-2 bg-dgray justify-center items-center rounded-br-[1.5rem] element12">
            <i className="fa-solid fa-id-badge text-3xl text-white"></i>
            <h1 className="text-4xl text-white font-bold">Contact</h1>
          </div>
        </div>

        <div className="flex flex-col px-6 py-24 sm:px-14 text-dgray">
          <h1 className="font-bold text-3xl">Lets Connect!</h1>
          <p className="text-gray font-normal pl-30 w-5/6 pt-5">
            Looking for a web developer? <br />
            I’d love to hear about your project ideas, answer your questions, or
            just have a chat. Let’s create something amazing together!
          </p>
          <p className="text-gray font-bold pl-30 w-5/6 pt-5">
            <i className="fas fa-phone"></i> 0995-332-4941
          </p>
          <p className="text-gray font-bold pl-30 w-5/6">
            <i className="fas fa-envelope"></i> marablelatrell@gmail.com
          </p>
          <p className="text-gray font-normal pl-30 w-5/6 pt-5 pb-3">
            Or email me directly by pressing this:
          </p>
          <li
            onClick={openModal}
            className="flex items-center justify-center w-1/2 sm:w-42 h-12 gap-2 px-6 text-white bg-dgray rounded-xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out animate-fadeIn"
          >
            <i className="fas fa-envelope text-xl"></i>
            <p className="text-xl font-semibold text-white">Contact</p>
          </li>
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

        <div className="flex absolute bg-dgray right-0 top-1/2 transform -translate-y-1/2 rounded-tl-[1rem] rounded-bl-[1rem] element14">
          <ul className="flex flex-col gap-2 pt-2 pb-2 pl-2 sm:pt-3 sm:pb-3 sm:pl-3 element15">
            <li className="flex animate-fadeIn">
              <a
                href="https://github.com/Havennnn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github text-4xl sm:text-5xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a
                href="https://www.linkedin.com/in/latrell-marable-b43a37256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-4xl sm:text-5xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a
                href="https://www.facebook.com/latrell.r.marable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-facebook text-4xl sm:text-5xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-outs"></i>
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a
                href="https://www.instagram.com/lancrms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-instagram text-4xl sm:text-5xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex w-full md:w-4/6 2xl:w-[48rem] h-full m-auto justify-center items-center">
        <div className="w-5/6 hidden md:block animate-fadeIn">
          <Lottie animationData={heroBg} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default About;

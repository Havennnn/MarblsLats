import React, { useState } from 'react';
import { assets } from '../assets/asset.js';
import cv from '../assets/MarableLatrell_Intern_Resume.pdf';

const Home = () => {
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const DownloadCV = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'MarableLatrell_CV.pdf';
        link.click();
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Message:', message);
        closeModal();
        setEmail('');
        setMessage('');
    };

    return (
        <div className="relative flex h-full">
            <div className="relative flex w-full flex-col gap-1 px-14 md:w-[55%] md:py-24 lg:w-[58%] my-auto">
                {/* My introduction lines */}
                <p className="font-bold text-gray">GOOD DAY!</p>
                <h1 className="font-bold text-5xl text-dgray text-shadow">I'm Latrell</h1>
                <p className="font-bold text-2xl text-gray">WEB DEVELOPER</p>
                <p className="text-dgray">
                    I am a passionate and innovative web developer with a knack for creating captivating and functional websites. 
                    With a blend of creativity and technical expertise, I bring digital ideas to life and deliver seamless online experiences.
                </p>
                
                {/* My introduction buttons */}
                <div className="py-4 flex items-center gap-3">
                    <button 
                        className="flex items-center justify-center w-32 gap-2 p-2 text-white bg-dgray rounded-xl shadow hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                        onClick={DownloadCV}
                    >
                        <img src={assets.resumeIcon} className="w-5 h-5"/>
                        Resume
                    </button>
                    <button 
                        className="flex items-center justify-center w-32 gap-2 p-2 text-white bg-dgray rounded-xl shadow hover:transform hover:scale-110 transition duration-300 ease-in-out"
                        onClick={DownloadCV}
                    >
                        <img src={assets.projectIcon} className="w-5 h-5"/>
                        Projects
                    </button>
                </div>
            </div>

            {/* My contact link buttons */}
            <div className="absolute left-0 bottom-0 flex pr-3 py-3 bg-dgray rounded-tr-[1.5rem] element3">
                <ul className="flex items-center justify-center gap-2 sm:gap-3 element4">
                    <li className="flex">
                        <a href="https://github.com/Havennnn" target="_blank" rel="noopener noreferrer">
                            <img 
                                src={assets.githubIcon} 
                                alt="github icon" 
                                className="w-8 sm:w-12 max-w-full hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                            />
                        </a>
                    </li>
                    <li className="flex">
                        <a href="https://www.linkedin.com/in/latrell-marable-b43a37256/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src={assets.linkedinIcon} 
                                alt="linkedin icon" 
                                className="w-8 sm:w-14 hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                            />
                        </a>
                    </li>
                    <li 
                        onClick={openModal} 
                        className="flex items-center justify-around h-8 sm:h-12 gap-2 px-6 text-white bg-white rounded-xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out"
                    >
                        <img 
                            src={assets.mailIcon} 
                            alt="Mail Icon" 
                            className="w-6 sm:w-8" 
                        />
                        <p className="text-xl font-semibold text-dgray">
                            Contact
                        </p>
                    </li>
                </ul>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-10 bg-gray-700 bg-opacity-50 flex justify-center items-center shadow">
                    <div className="bg-white p-6 rounded-lg w-96    ">
                        <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" className="block text-gray-600">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                                required
                            />
                            <label htmlFor="message" className="block text-gray-600">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                                rows="4"
                                required
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full p-2 bg-dgray text-white rounded-xl hover:transform hover:scale-110 transition duration-300 ease-in-out"
                            >
                                Send Message
                            </button>
                        </form>
                        <button
                            onClick={closeModal}
                            className="mt-4 text-gray-600 hover:text-dgray"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* home hero background */}
            <img 
                src={assets.herobg} 
                className="absolute object-fill right-0 top-0 bottom-0 md:w-[20rem] lg:w-[28rem] xl:w-[32rem] my-auto hidden md:block" 
            />
        </div>
    );
};

export default Home;

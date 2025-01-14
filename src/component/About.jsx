import React from 'react'
import { assets } from '../assets/asset.js'
import heroBg from '../assets/Herobg-new.json'
import Lottie from 'lottie-react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row mt-10 w-full h-full gap-5'>
      {/* Left Div */}
      <div className='relative flex w-full md:w-3/6 h-full bg-white rounded-bl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[1.5rem] flex-grow'>
        {/* Heading */}
        <div className='flex element13'>
          <div className='absolute flex pr-3 py-3 gap-1 bg-dgray justify-center items-center rounded-br-[1.5rem] element12'>
            <img src={assets.puzzleIcon} alt='' className='w-8 h-8 mt-[-2px]' />
            <h1 className='text-4xl text-white font-bold'>CONTACT</h1>
          </div>
        </div>

        <div className='flex flex-col px-6 py-24 sm:px-14 text-dgray'>
          <h1 className='font-bold text-3xl'>Lets Connect!</h1>
          <p className='text-gray font-normal pl-30 w-5/6 pt-5'>
            Looking for a passionate web developer? I’d love to hear about your project ideas, answer your questions, or just have a chat. Let’s create something amazing together!
          </p>
          <p className='text-gray font-bold pl-30 w-5/6 pt-5'>
          <i class="fas fa-phone-alt"></i> 0995-332-4941
          </p>
          <p className='text-gray font-bold pl-30 w-5/6'>
          <i class="fas fa-envelope"></i> marablelatrell@gmail.com
          </p>
          <p className='text-gray font-normal pl-30 w-5/6 pt-5 pb-3'>
            Or email me directly by pressing this:
          </p>
          <li className="flex items-center justify-around w-1/2 sm:w-48 h-12 gap-2 px-6 text-white bg-dgray rounded-xl hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out animate-fadeIn">
              <img 
                src={assets.mailWIcon} 
                alt="Mail Icon" 
                className="w-6 sm:w-8" 
              />
              <p className="text-xl font-semibold text-white">
                Contact
              </p>
          </li>
        </div>

        <div className='flex absolute bg-dgray right-0 top-1/2 transform -translate-y-1/2 rounded-tl-[1rem] rounded-bl-[1rem] element14'>
          <ul className="flex flex-col gap-2 pt-2 pb-2 pl-2 sm:pt-3 sm:pb-3 sm:pl-3 element15">
            <li className="flex animate-fadeIn">
              <a href="https://github.com/Havennnn" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.githubIcon} 
                  alt="github icon" 
                  className="w-8 sm:w-12 max-w-full hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                />
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a href="https://www.linkedin.com/in/latrell-marable-b43a37256/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.linkedinIcon} 
                  alt="linkedin icon" 
                  className="w-8 sm:w-14 hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                />
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a href="https://www.facebook.com/latrell.r.marable" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.fbIcon} 
                  alt="facebook icon" 
                  className="w-8 sm:w-14 hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                />
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a href="https://www.instagram.com/lancrms/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.igIcon} 
                  alt="instagram icon" 
                  className="w-8 sm:w-14 hover:cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out" 
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Div (Lottie) */}
      <div className="relative flex w-full md:w-4/6 h-full m-auto justify-center items-center">
        <div className="w-5/6 hidden md:block animate-fadeIn">
          <Lottie
            animationData={heroBg}
            loop={true}
          />
        </div>
      </div>
    </div>
  )
}

export default About;


import React from 'react';
import { assets } from '../assets/asset.js';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 flex lg:hidden">
        <h1 className="font-semibold text-3xl py-2 text-gray px-14 text-shadow">
          Marb<span className="font-semibold text-5xl text-dgray">Lats</span>
        </h1>
        <div className='flex p-3 rounded-bl-[1.5rem] bg-dgray element5'>
          <button onClick={toggleMenu} className="text-white2 element6">
            {/* Change the icon based on isMenuOpen state */}
            {isMenuOpen ? (
              <div className='flex z-50 transform ease-in-out duration-300 rounded-bl-[1.5rem] element9'>
              <img 
              src={assets.closeIcon} 
              alt="Close Icon" 
              className="w-12 h-12 p-2 bg-dgray hover:cursor-pointer hover:transform hover:scale-110 transition ease-in-out duration-300"
               /></div>) : (<img 
              src={assets.menuIcon} 
              alt="Menu Icon" 
              className="w-12 h-12 bg-dgray hover:cursor-pointer hover:transform hover:scale-110 transition ease-in-out duration-300" 
            />)
            }
           
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-dgray text-white px-[16.5px] absolute rounded-bl-[1.5rem] right-0 top-[70px] z-20 transform transition-all duration-500 ease-in-out block lg:hidden element8">
          <ul className="flex flex-col pt-2 pb-5 gap-5">
            <li className='flex text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.homeIcon} alt="" className='w-6' />
            </li>
            <li className='flex text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.puzzleIcon} alt="" className='w-6' />
            </li>
            <li className='flex gap-2 text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.aboutIcon} alt="" className='w-6' />
            </li>
            <li className='flex gap-2 text-white justify-around items-center hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.projectIcon} alt="" className='w-6' />
            </li>
          </ul>
        </div>
      )}

      <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden lg:flex">
        <div className="flex">
          <h1 className='font-semibold text-3xl text-gray px-14 text-shadow'>Marb<span className='font-semibold text-5xl text-dgray'>Lats</span></h1>
        </div>
        <div className="flex pl-3 pt-3 pb-5 rounded-bl-[1.5rem] bg-dgray element ">
          <ul className="flex gap-1 lg:gap-6 element2">
            <li className='flex border-2 border-white hover:cursor-pointer py-1 px-6 rounded-full justify-around items-center gap-2 hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.homeIcon} alt="" className='w-4' />
              <p className='text-white font-semibold'>Home</p>
            </li>
            <li className='flex border-2 border-white hover:cursor-pointer py-1 px-6 rounded-full justify-around items-center gap-2 hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.puzzleIcon} alt="" className='w-4' />
              <p className='text-white font-semibold'>Skills</p>
            </li>
            <li className='flex border-2 border-white hover:cursor-pointer py-1 px-6 rounded-full justify-around items-center gap-2 hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.aboutIcon} alt="" className='w-4' />
              <p className='text-white font-semibold'>About</p>
            </li>
            <li className='flex border-2 border-white hover:cursor-pointer py-1 px-6 rounded-full justify-around items-center gap-2 hover:transform hover:scale-110 transition ease-in-out duration-300'>
              <img src={assets.projectIcon} alt="" className='w-4' />
              <p className='text-white font-semibold'>Projects</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

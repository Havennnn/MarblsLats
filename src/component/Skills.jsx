import React, {useState} from 'react'
import { assets } from '../assets/asset.js'

const Skills = () => {
    const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  
    const handleNext = () => {
      setCurrentPage((prevPage) => (prevPage < 2 ? prevPage + 1 : prevPage)); // Next page
    };
  
    const handlePrevious = () => {
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage)); // Previous page
    };

    return (
    <div className='flex mt-10'>
      <div className='flex flex-col md:flex-row items-center w-full gap-5'>
        
        {/* Skill Section */}
        <div className="flex flex-col h-full w-full md:w-2/4 ">
          {currentPage === 1 && (
            <div className='flex flex-col h-full my-auto'>
              {/* Page 1 */}
              <h1 className="text-white font-medium text-xl">
                Web Technologies
              </h1>
              {/* HTML */}
              <Skill name="HTML" level="100%" />
              {/* CSS */}
              <Skill name="CSS" level="100%" />
              {/* Tailwind CSS */}
              <Skill name="Tailwind CSS" level="100%" />
              {/* JavaScript */}
              <Skill name="JavaScript" level="100%" />
              <h1 className="text-white font-medium text-xl pt-3">
                Frontend Frameworks
              </h1>
              {/* React.js */}
              <Skill name="React.js" level="100%" />
            </div>
        )}
        {currentPage === 2 && (
            <div className='flex flex-col h-full my-auto'>
              {/* Page 2 */}
              <h1 className="text-white font-medium text-xl">
                Backend Framework
              </h1>
              {/* Node.js */}
              <Skill name="Node.js" level="100%" />
              {/* Express.js */}
              <Skill name="Express.js" level="100%" />
              <h1 className="text-white font-medium text-xl pt-3">Database</h1>
              {/* MongoDB */}
              <Skill name="MongoDB" level="100%" />
            </ div>
        )}

            <div className="flex gap-4 mt-4 pb-10 md:pb-0">
                <button
                onClick={handlePrevious}
                className={`flex items-center justify-center p-3 bg-[#d9d9d9] text-white rounded-full ${
                    currentPage === 1 ? "opacity-50" : ""
                }`}
                disabled={currentPage === 1}
                >
                <img src={assets.leftIcon} className='w-3 h-3' />
                </button>
                
                <button
                onClick={handleNext}
                className={`flex items-center justify-center p-3 bg-[#d9d9d9] text-white rounded-full ${
                    currentPage === 2 ? "opacity-50" : ""
                }`}
                disabled={currentPage === 2}
                >
                <img src={assets.rightIcon} className='w-3 h-3' />
                </button>
            </div>
        </div>

        <div className='relative bg-white w-full h-full rounded-tl-[1.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] md:w-2/4 p-4'>
            <div className='absolute right-0 top-0 pl-3 py-3 flex gap-1 bg-dgray justify-center items-center rounded-bl-[1.5rem] element11'>
                <img src={assets.puzzleIcon} alt='' className='w-8 h-8 mt-[-2px]'></img>
                <h1 className='text-4xl text-white font-bold element10'>Skill</h1>
            </div>
            <h1 className='text-xl pt-5 md:px-2 md:pt-5 lg:pt-2 md:text-[24px] lg:text-3xl px-4 text-dgray font-bold'>What can I bring?</h1>
            <p className='text-gray pt-2 md:pt-4 md:px-2 pb-5 px-4'>I am a passionate web developer with a solid foundation in HTML, CSS, JavaScript,  
            and familiarity with React, MongoDB, and Tailwind CSS. My hands-on experience includes 
            completing certifications in web development and cybersecurity, and working on team-based 
            projects where I developed strong organizational and problem-solving skills. With a commitment 
            to learning and a track record of adapting to new technologies, I am eager to contribute innovative, 
            impactful solutions to your team while continuing to grow as a developer.</p>
        </div>
      </div>
    </div>
  )
}

const Skill = ({ name, level }) => (
    <>
      <div className="flex items-center gap-1">
        <img src={assets.homeIcon} className="w-3 h-3" alt="" />
        <p className="text-white">{name}</p>
      </div>
      <div className="flex gap-1">
        <div className="w-full h-[10px] bg-gray rounded-full">
          <div className={`w-[${level}] h-full bg-white rounded-full`}></div>
        </div>
        <p className="text-[12px] text-white font-bold mt-[-5px]">{level}</p>
      </div>
    </>
  );

export default Skills

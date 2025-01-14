import React from 'react'
import { assets } from '../assets/asset'

const Project = () => {
  return (
    <div className='relative flex flex-col md:flex-row mt-10 w-full h-full px-6 sm:px-14 pt-16 pb-10 bg-white rounded-[1.5rem] justify-center items-center'>
      <div className='absolute top-0 flex px-3 pb-3 bg-dgray rounded-bl-[1.5rem] rounded-br-[1.5rem] element16'>
        <div className='flex gap-3 justify-center items-center element17'>
        <img src={assets.projectIcon} alt='' className='w-8 h-8 mt-[-2px]' />
        <h1 className='text-4xl text-white font-bold'>PROJECTS</h1>
        </div>
      </div>

      <div className='w-full'>
        {/* Grid Layout for Project Cards */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* Project Card 1 */}
          <div className='shadow-xl rounded-[1.5rem] p-6'>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-semibold text-dgray'>Project Title</h3>
              <a href='#' className='text-blue-500 hover:underline'>View Project</a>
            </div>
            <p className='text-gray-500 mt-2'>
              A short description of the project, what technologies were used, and its key features. 
              This section can summarize your project to give visitors a quick understanding.
            </p>
            <div className='mt-4 flex gap-3'>
              <span className='text-sm bg-blue-100 text-blue-500 rounded-full px-3 py-1'>React</span>
              <span className='text-sm bg-green-100 text-green-500 rounded-full px-3 py-1'>Node.js</span>
              <span className='text-sm bg-purple-100 text-purple-500 rounded-full px-3 py-1'>TailwindCSS</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className='shadow-xl rounded-[1.5rem] p-6'>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-semibold text-dgray'>Project Title 2</h3>
              <a href='#' className='text-blue-500 hover:underline'>View Project</a>
            </div>
            <p className='text-gray-500 mt-2'>
              A brief summary of the second project. Discuss its purpose, technologies, and features.
            </p>
            <div className='mt-4 flex gap-3'>
              <span className='text-sm bg-yellow-100 text-yellow-500 rounded-full px-3 py-1'>Python</span>
              <span className='text-sm bg-red-100 text-red-500 rounded-full px-3 py-1'>Django</span>
              <span className='text-sm bg-indigo-100 text-indigo-500 rounded-full px-3 py-1'>PostgreSQL</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className='shadow-xl rounded-[1.5rem] p-6'>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-semibold text-dgray'>Project Title 3</h3>
              <a href='#' className='text-blue-500 hover:underline'>View Project</a>
            </div>
            <p className='text-gray-500 mt-2'>
              A brief description of the third project. Explain the purpose, technologies used, and its functionality.
            </p>
            <div className='mt-4 flex gap-3'>
              <span className='text-sm bg-teal-100 text-teal-500 rounded-full px-3 py-1'>JavaScript</span>
              <span className='text-sm bg-orange-100 text-orange-500 rounded-full px-3 py-1'>Vue.js</span>
              <span className='text-sm bg-pink-100 text-pink-500 rounded-full px-3 py-1'>Firebase</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project

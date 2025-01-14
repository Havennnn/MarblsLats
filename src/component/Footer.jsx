import React from 'react'
import { assets } from '../assets/asset'

const Footer = () => {
  return (
    <footer className='bg-dgray text-white py-8 mt-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* Contact Section */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact</h3>
            <ul className='flex flex-col'>
              <li className='mb-2'><i class="fas fa-envelope"></i> <a href='mailto:your.email@example.com' className='hover:underline'>marablelatrell@gmail.com</a></li>
              <li className='mb-2'><i class="fas fa-phone-alt"></i> <a href='tel:+1234567890' className='hover:underline'>0995-332-4941</a></li>
              <li className='mb-2'><i className="fas fa-map-marker-alt"></i> Taytay, Rizal</li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
            <ul className='flex gap-6'>
              <li>
                <a href='https://github.com/Havennnn' target='_blank' rel='noopener noreferrer'>
                  <img src={assets.githubIcon} alt='GitHub' className='w-8 hover:scale-110 transition duration-300' />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/latrell-marable-b43a37256/' target='_blank' rel='noopener noreferrer'>
                  <img src={assets.linkedinIcon} alt='LinkedIn' className='w-8 hover:scale-110 transition duration-300' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                  <img src={assets.fbIcon} alt='Instagram' className='w-8 hover:scale-110 transition duration-300' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                  <img src={assets.igIcon} alt='Instagram' className='w-8 hover:scale-110 transition duration-300' />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Home</a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Skills</a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Contact</a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Project</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

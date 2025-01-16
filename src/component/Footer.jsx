import React from 'react'

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
                  <i className="fa-brands fa-square-github text-3xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/latrell-marable-b43a37256/' target='_blank' rel='noopener noreferrer'>
                  <i className="fa-brands fa-linkedin text-3xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/latrell.r.marable' target='_blank' rel='noopener noreferrer'>
                  <i className="fa-brands fa-square-facebook text-3xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/lancrms/' target='_blank' rel='noopener noreferrer'>
                  <i className="fa-brands fa-square-instagram text-3xl text-white hover:transform hover:scale-110 transition duration-300 ease-in-out"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul>
              <li className='mb-2'>
                <a href='#home' className='hover:underline'>Home</a>
              </li>
              <li className='mb-2'>
                <a href='#skills' className='hover:underline'>Skills</a>
              </li>
              <li className='mb-2'>
                <a href='#contact' className='hover:underline'>Contact</a>
              </li>
              <li className='mb-2'>
                <a href='#projects' className='hover:underline'>Project</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

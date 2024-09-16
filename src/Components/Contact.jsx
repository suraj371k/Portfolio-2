import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div id='contact' className='font-[profile] pb-24 bg-[#4361ee] mt-16 relative'>
      <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-6xl mx-auto bg-[#293241] text-white gap-8 p-6 md:p-12 rounded-2xl'>
        <div className='text-center md:text-left'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Start the Project</h2>
        </div>
        <div className='text-center md:text-left w-full md:w-1/2'>
          <p className='text-base sm:text-lg md:text-xl'>
            Interested in working together? We should queue up a time to chat.
          </p>
        </div>
        <div className='text-center'>
          <NavLink to='/message'>
            <button className='px-6 py-3 border-4 border-[#28adc8] text-lg md:text-xl rounded-full hover:bg-[#369aad] hover:text-black transition duration-300'>
              Let's do this
            </button>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col items-center mt-16'>
        <p className='text-base sm:text-lg md:text-xl text-center text-white w-full max-w-lg px-4'>
          Living, learning, & leveling up one day at a time.
        </p>
        <div className='flex gap-6 mt-6'>
          <a className='text-3xl sm:text-4xl' href='https://github.com/suraj371k/'><FaGithub /></a>
          <a className='text-3xl sm:text-4xl' href='https://www.linkedin.com/in/suraj-kushwaha-a696a8258/'><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

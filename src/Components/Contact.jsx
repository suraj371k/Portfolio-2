import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Contact = () => {
  return (
    <div id='contact' className='font-[profile]  pb-24 bg-[#4361ee] mt-64 relative'>
        <div className='flex justify-center w-[70vw] bg-[#293241] text-white ml-64
        gap-40 p-20 rounded-2xl absolute -top-24'>
            <div>
                <h2 className='text-4xl font-semibold'>Start the Project</h2>
            </div>
            <div className='w-[400px] text-xl text-center'>
                <p>Interested in working together? We Should queue up a time to chat.</p>
            </div>
            <div>
                <NavLink to='/message'>
                <button className='px-8 py-4 border-4 border-[#28adc8] text-xl
                rounded-full hover:bg-[#369aad] hover:text-black transtion duration-300'>
                    Let's do this</button>
                </NavLink>
            </div>
        </div>
        <div className='flex pt-[250px] items-center flex-col'>
            <div>
               <p className='text-[1.5rem] text-center text-white w-[400px]
               '>Living , learning ,
                 & leveling up one day at a time.</p> 
            </div>
            <div className='flex gap-8 pt-10'>
            
            <a className='text-4xl' href='https://github.com/suraj371k/'><FaGithub /></a>
            <a className='text-4xl' href='https://www.linkedin.com/in/suraj-kushwaha-a696a8258/'>  <FaLinkedin /></a>
          
            </div>
        </div>
    </div>
  )
}

export default Contact
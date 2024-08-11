import React from 'react'
import profile from '../assets/profile.svg'
import { NavLink } from 'react-router-dom'


const Message = () => {
  return (
    <div className='font-[profile]'>
    
    <div className='flex flex-col items-center mt-24'>
      <div>
        <NavLink to='/'> <img src={profile} width={100}/>        </NavLink>
      </div>
      <div className='w-[50vw]'>
        <h2 className='text-[3rem] text-center text-[#343a40]'>
          Thanks for taking the time to reach out. How can I help you today?</h2>
      </div>
        <div className='flex flex-col mt-16'>
         <div>
            <label>Name</label><br/>
            <input className='border-2 border-[#c6c9cb] w-[20vw] py-3 rounded-lg'
             type='text'/>
         </div>
           <div className='mt-10 mb-10'>
            <label>Email</label><br/>
            <input className='border-2 border-[#c6c9cb] w-[20vw] py-3 rounded-lg'
             type='email'></input>
        </div>
        </div>
        <div>
            <label>Message</label><br/>
            <textarea className='border-2 border-[#c6c9cb] w-[20vw] py-3 rounded-lg'
             rows='6' cols='50'></textarea>
        </div>
        <div className='mb-20'>
          <button className='px-7 py-3 rounded-full hover:bg-blue-600
          border-2 border-blue-600 hover:text-white transiton duration-300'>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Message
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {


  return (
    <div className='flex justify-around pt-10 flex-wrap'>
     
        <div>
            <ul className='flex gap-x-10 text-xl pt-5 flex-wrap md:gap-y-4 sm:gap-y-5'>
                <li className='pt-3' ><a href='#about'>About</a></li>
                <li className='pt-3'><a href='#projects'>Projects</a></li>
                <li className='pt-3'><a href='#contact'>Contact</a></li>
                <NavLink className='border-2 border-blue-600 p-3 rounded-full hover:bg-blue-800
                hover:text-white transition duration-300 text-blue-600'
                to='/message'><button>Say hello</button></NavLink>

            </ul>
        </div>
    </div>
  )
}

export default Navbar
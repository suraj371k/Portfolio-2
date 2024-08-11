import React, { useEffect, useState , useContext} from 'react'
import Navbar from './Navbar'
import profile from '../assets/profile.svg'
import image2 from '../assets/image2.svg'
const Intro = () => {

    const names = ["Suraj Kushwaha" , "Frontend Developer"]
    const [currentIndex , setCurrentIndex] = useState(0)

   useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length)
    }, 2000)
    return () => clearInterval(interval)
   } , [names.length])

  return (
    <div className=''>
        <div>
    <Navbar/>
        </div>
        <div className='flex w-full h-screen flex-col items-center justify-center'>
        <div className=''>
            <h3 className='text-[3rem] font-semibold font-[profile]'>
                I am <span className='font-cursive animate-fade text-[#118ab2]'>
                    {names[currentIndex]}</span></h3>
        </div>
        <div className='pb-20'>
            <p className='text-xl'>I design and code beautifully simple things , and I love What I do</p>
        </div>
        <div className='pb-10'>
            <img src={profile}/>
        </div>
        <div>
            <img src={image2} width={900}/>
        </div>
    </div>
    </div>
  )
}

export default Intro
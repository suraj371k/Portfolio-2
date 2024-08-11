import React from 'react'
import resume from '../assets/Resume 1 suraj.pdf'
import css from '../assets/css.png'
import html from '../assets/html-5.png'
import js from '../assets/js.png'
import tailwind from '../assets/tailwind css icon.png';
import react from '../assets/react.png'

const About = () => {
  return (
    <div className='font-[profile] mb-20 pt-20' id='about'>
    <div className='bg-[#4361ee] w-full h-auto text-white flex  flex-col
    items-center pt-20'>
        <div>
            <h3 className='text-[3rem] font-semibold' >Get to know me</h3>
        </div>
        <div className='w-[40vw] text-xl'>
            <p className='pb-5 pt-5' >
            Hi, my name is Suraj Kushwaha and I am from Uttar Pradesh , Ghazipur. I'm a 
            Frontend web developer and a third year university student pursuing Bachelor of 
            Computer Application from Lucknow.
            </p>
            <p>
            I love to create projects with beautiful designs and put my own twists on it, you 
            can check out some of my work in the project section
            </p>
            <p className='pt-5 pb-5 '>
            As a fresher, I am enthusiastic about the opportunity to apply my knowledge in
             real-world scenarios and contribute to creating exceptional user experiences.
            </p>
            <button className='text-center px-8 py-4 mb-40 rounded-2xl bg-[black]
            '><a href={resume}>Donwload Resume</a></button>
        </div>
    </div>
    <div className='flex items-center flex-col mt-20'>
        <div>
            <h3 className='text-[3rem] font-semibold'>Skillset</h3>
        </div>
        <div className='p-4 md:p-8 lg:p-16'>
            <ul className='flex lg:gap-32 pt-16 flex-wrap md:gap-16 sm:gap-8'>
                <li className='animate-scale'><img className='w-24 md:w-32 lg:w-48' src={html} width={200}/></li>
                <li className='animate-scale'><img className='w-24 md:w-32 lg:w-48' src={css} width={200}/></li>
                <li className='animate-scale'><img className='w-24 md:w-32 lg:w-48' src={tailwind} width={200}/></li>
                <li className='animate-scale'><img className='w-24 md:w-32 lg:w-48' src={js} width={200}/></li>
                <li className='animate-scale'><img className='w-24 md:w-32 lg:w-48' src={react} width={200}/></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default About
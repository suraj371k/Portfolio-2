import React from 'react';
import resume from '../assets/my-resume.pdf';
import css from '../assets/css.png';
import html from '../assets/html-5.png';
import js from '../assets/js.png';
import tailwind from '../assets/tailwind css icon.png';
import react from '../assets/react.png';

const About = () => {
  return (
    <div className='font-[profile] mb-20 pt-20' id='about'>
      <div className='bg-[#4361ee] w-full min-h-[70vh] text-white flex flex-col items-center pt-20'>
        <div>
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Get to know me</h3>
        </div>
        <div className='w-full max-w-4xl text-3xl sm:text-lg md:text-xl px-4'>
          <p className='pb-5 pt-5'>
            Hi, my name is Suraj Kushwaha and I am from Uttar Pradesh, Ghazipur. I'm a 
            Frontend web developer and a third-year university student pursuing a Bachelor of 
            Computer Application from Lucknow.
          </p>
          <p>
            I love to create projects with beautiful designs and put my own twists on it. You 
            can check out some of my work in the project section.
          </p>
          <p className='pt-5 pb-5'>
            As a fresher, I am enthusiastic about the opportunity to apply my knowledge in
            real-world scenarios and contribute to creating exceptional user experiences.
          </p>
          <a href={resume} className='text-center px-6 py-3 mt-8 rounded-2xl bg-black text-white'>
            Download Resume
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center mt-20'>
        <div>
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Skillset</h3>
        </div>
        <div className='p-4 md:p-8 lg:p-16'>
          <ul className='flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24'>
            <li className='animate-scale'>
              <img className='w-16 sm:w-24 md:w-32 lg:w-48' src={html} alt="HTML" />
            </li>
            <li className='animate-scale'>
              <img className='w-16 sm:w-24 md:w-32 lg:w-48' src={css} alt="CSS" />
            </li>
            <li className='animate-scale'>
              <img className='w-16 sm:w-24 md:w-32 lg:w-48' src={tailwind} alt="Tailwind CSS" />
            </li>
            <li className='animate-scale'>
              <img className='w-16 sm:w-24 md:w-32 lg:w-48' src={js} alt="JavaScript" />
            </li>
            <li className='animate-scale'>
              <img className='w-16 sm:w-24 md:w-32 lg:w-48' src={react} alt="React" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

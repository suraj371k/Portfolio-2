import React from 'react';

const Card = ({project}) => {
    return (
        <div>
         <div className='w-[400px] px-5 py-10 rounded-lg bg-[#2d9c7b] m-10 
         transition duration-500'>
      <img className='rounded-xl text-white  p-5' src={project.image} alt={project.title} width={500} height={700} />
      <h3 className='text-2xl text-white  font-semibold p-6'>{project.title}</h3>
      <p className='text-xl  text-white p-6'>{project.description}</p>
      <a  className='text-xl py-3 px-6 bg-black text-white mx-5  rounded-2xl' 
      href={project.github} target='_blank'>GitHub</a>
      <a className='text-xl py-3 px-6 bg-black text-white mx-5  rounded-2xl'
       target='_blank' href={project.site}>Live Site</a>
    </div>
        </div>
    );
};

export default Card;

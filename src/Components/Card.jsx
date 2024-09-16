import React from 'react';

const Card = ({ project }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300'>
      <img
        className='w-full h-48 object-cover'
        src={project.image}
        alt={project.title}
      />
      <div className='p-6'>
        <h3 className='text-2xl font-semibold text-gray-800 mb-3'>{project.title}</h3>
        <p className='text-lg text-gray-600 mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-4'>
          <a
            className='text-lg py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            className='text-lg py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300'
            href={project.site}
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

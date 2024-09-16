import React from 'react';
import Card from './Card';
import data from './Data';

const Projects = () => {
  return (
    <div className="font-[profile] mt-24 px-4" id='projects'>
      <div className='text-center mb-12'>
        <h3 className='text-[2rem] md:text-[3rem] font-semibold'>My Projects</h3>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {data.map((project) => (
          <div key={project.id} className='w-full'>
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react'
import Card from './Card'
import data from './Data'

const Projects = () => {
  return (
    <div className="font-[profile] mt-24" id='projects'>
        <div>
            <h3 className='text-[3rem] text-center font-semibold'>My Projects</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
            {
                data.map((project) => {
                    return(
                        <div className=''>
                            <Card key={project.id} project={project} />
                        </div>

                    )
                })
            }
        </div>  
    </div>
  )
}

export default Projects
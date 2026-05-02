import React from 'react'
import ProjectCard from '../components/projects/projectCard'


const projects = () => {
  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <div className='font-[font2] text-[9.5vw] uppercase'>Projets</div>
      </div>

      <div className='-mt-12 '>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default projects

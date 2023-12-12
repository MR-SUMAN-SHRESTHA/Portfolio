import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
    <div className='flex flex-col items-center justify-center py-20 cursor-pointer'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20'>My Projects</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/spaceportfolio.png"
          title='Modern Next js Portfolio by suman shrestha'
          description='This is a simple next js portfolio website developed by suman shrestha '
          href='#'
        />
        <ProjectCard
          src="/ecommercewebsite.png"
          title='Ecommerce Website'
          description='This is a modern eommerce website created by the students of computer engineering SEE-batch 2080 for there school project '
          href="https://testingesewa.000webhostapp.com/index.html"
        />

      </div>
    </div>
    </section>
  )
}

export default Projects
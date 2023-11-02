import React from 'react'
import "./styles.scss"

interface WorkCardProps {
  imgPath: string;
  project: string;
  description: string;
  technologies: string[];
}

export function WorkCard({ imgPath, project, description, technologies }: WorkCardProps) {
  return (
      <div className='flex gap-5 flex-col sm:flex-row items-center sm:items-stretch '>
        <img src={imgPath} className='w-[250px] h-[280px]' />
        <div className='text-center sm:text-left max-w-[350px] sm:max-w-[500px]'>
            <span className='text-[25px] font-semibold about-body-title'>{project}</span> < br />
            <p className='mt-2 mb-3'><span className='second-title text-[18px] font-semibold'>{description}</span></p>

            <div className='flex gap-4 mt-2 font-semibold flex-nowrap	sm:flex-wrap overflow-scroll sm:overflow-auto mx-5 sm:mx-0'>
              {technologies.map((tech) => {
                return (
                  <div className='bg-white py-2 px-7 rounded-full'>{tech}</div>
                )
              })}
            </div>
        </div>
      </div>
  )
}

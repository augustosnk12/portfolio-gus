import React from 'react'

import { WorkCard } from './WorkCard'

export function Work() {
  return (
    <div className='mr-5 ml-5'>
      <div className='about-body mt-[7rem] text-center'>
        <span className='about-body-title text-[40px] font-medium'>Trabalhos</span> < br />
        <span className='text-[20px] second-title font-semibold'>Apresento-vos um breve resumo de todos os meus trabalhos como garoto de programa</span>

        <div className='mt-[10rem]'>
            <WorkCard
              imgPath='/work-portfolio.jpg'
              project='Este projeto'
              description='Portfólio para abrigar todos os meus outros trabalhos'
              technologies={['ReactJS', 'TailwindCSS']}
            />
        </div>
      </div>
    </div>
  )
}

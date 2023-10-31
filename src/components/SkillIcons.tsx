import React from 'react'
import "./styles.scss"

interface SkillIconProps {
  icon: string;
  link: string;
  svgClass?: string;
}

export function SkillIcon({ icon, link, svgClass }: SkillIconProps) {
  return (
      <div className='header flex justify-between	mt-8 items-center mr-5 ml-5'>
        <a href={link} target='_blank'>
          <img src={`/${icon}.svg`} alt="Menu" className={`w-[100px] h-[100px] ${svgClass}`} />
        </a>
      </div>
  )
}

import React from 'react'

import packageJson from '../../package.json'

import "./styles.scss"


export function Footer() {
  return (
    <>
      <div className='text-center mt-[10rem] mb-2 font-semibold'>
          <p>
            <span className='text-[20px] second-title'>{'Made with <3 using ReactJS'}</span>
          </p>
          <p>
            <span className='text-[20px] second-title'> © {new Date().getFullYear()} - Augusto Portfolio - v{packageJson.version}</span>
          </p>
      </div>
    </>
  )
}

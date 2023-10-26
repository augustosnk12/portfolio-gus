import React, { useState, useRef } from 'react'
import { Menu } from 'primereact/menu';

import "./styles.scss"

const items = [
  { label: 'Sobre' },
  { label: 'Trabalhos' },
  { label: 'Contato' },
  { label: 'Github',  url: 'https://github.com/augustosnk12' }
];

export function Header() {
  const [open, setOpen] = useState(false)
  const menuRight = useRef(null) as any;

  return (
    <>
      <div className='header flex justify-between	mt-8 items-center mr-5 ml-5'>
        <h4 className='gus-logo text-[48px]'>GUS</h4>

        <div className='gap-x-[2.75rem] flex text-[24px] items-menu'>
          <a href='#'>Sobre</a>
          <a href='#'>Trabalhos</a>
          <a href='#'>Contato</a>
          <a href='https://github.com/augustosnk12' target='_blank'>
            <img src="/github.svg" alt="Github access" className='w-8 h-8' />
          </a>
        </div>

      <img src="/menu.svg" alt="Menu" className='w-8 h-8 menu' onClick={(event) => menuRight.current.toggle(event)} />

      <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
      </div>
    </>
  )
}

import React, { useState, useRef } from 'react'
import { Menu } from 'primereact/menu';

import  { pageProps } from '../utils/Types'
import { UIStore } from "../utils/UIStore";

import "./styles.scss"

export function Header() {
  const [open, setOpen] = useState(false)
  const [page , setPage] = useState<pageProps>('About')

  const menuRight = useRef(null) as any;

  function handleChangePage(page: pageProps) {
    UIStore.update(s => {
           s.page = page;
    })
  }

  const items = [
    { label: 'Sobre', command: () => { handleChangePage('About') } },
    { label: 'Trabalhos', command: () => { handleChangePage('Works') } },
    { label: 'Contato', command: () => {  handleChangePage('Contact') } },
    { label: 'Github',  url: 'https://github.com/augustosnk12' }
  ];

  return (
    <>
      <div className='header flex justify-between	mt-8 items-center mr-5 ml-5'>
        <h4 className='gus-logo text-[48px]'>GUS</h4>

        <div className='gap-x-[2.75rem] flex text-[24px] items-menu'>
          <span className='cursor-pointer' onClick={() => handleChangePage('About')}>Sobre</span>
          <span className='cursor-pointer' onClick={() => handleChangePage('Works')}>Trabalhos</span>
          <span className='cursor-pointer'  onClick={() => handleChangePage('Contact')}>Contato</span>
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

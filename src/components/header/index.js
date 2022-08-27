import React from 'react'
import { useState } from 'react';
import './header.css';
import Mobile from './mobile';
import Web from './web';
function Header() {
  const [isOpen, setOpen] = useState(false); //react hook(this is used in the hamburger icon)
  return (
    <div className='header'>
      <div className='logo'>Arkashish</div>
      <div className='menu'>
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          {/* <Mobile/> */}
          <div onClick={()=>setOpen(!isOpen)}>
            <i class="fi fi-rs-apps menu icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setOpen={setOpen}/>}
        </div>
      </div>
    </div>
  )
}

export default Header

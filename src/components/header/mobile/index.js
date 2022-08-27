import React from 'react'
import './mobile.css'
function Mobile({ isOpen, setOpen }) {
  return (
    <div className='mobile'>
      <div className="close-icon" onClick={() => setOpen(!isOpen)}>
        <i class="fi fi-rs-circle-cross"></i>
      </div>
      <div className="mobile-options">
        <div className='mobile-option'>
          <a href="#project ">
            <i class="fi fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>
        <div className='mobile-option'>
          <a href="#skills">
            <i class="fi fi-rs-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className='mobile-option'>
          <a href="#work">
            <i class="fi fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className='mobile-option'>
          <a href="#contact">
            <i class="fi fi-rs-user option-icon"></i>Contact
          </a>
        </div>
        <div className='mobile-option'>
          <a href=""></a>
        </div>
      </div>
    </div>
  )
}

export default Mobile

import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello There ✌️,<br/>
          I'm <span className='info-name'>Arkashish Sutradhar</span>,<br/>
          I love working with Web Technology
        </div>
        <div className='about-photo'>
          <img src={require('../../../assets/coding.png')} 
          className="pic"

          />
        </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About

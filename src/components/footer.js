import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <p className='contact-me'>Unlock endless possibilities by knocking on my door, let's explore the opportunity of working together! ↓</p>
        <ul className='social-links'>
          <li className='mail'><Link to='#' onClick={() => window.location = 'mailto:vikkbehal@gmail.com'} target="_blank">vikkbehal@gmail.com</Link></li>
          <li className='dribbble'><Link to="https://dribbble.com/vikkbehal" target="_blank">Dribbble</Link></li>
          <li className='linkedin'><Link to="https://www.linkedin.com/in/vikkbehal/" target="_blank">LinkedIn</Link></li>
          <li className='instagram'><Link to="https://www.instagram.com/ux.vikkbehal/" target="_blank">Instagram</Link></li>
        </ul>
        <p className='footerstripe'>© 2023 Vishal Behal. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
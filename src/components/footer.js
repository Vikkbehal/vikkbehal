import React from 'react'
import { Link } from 'react-router-dom';
import { Dribbble, Mail, Insta, LinkedIn, Behance, Gmail} from '../assets/img/social'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <p className='contact-me'>Unlock endless possibilities by knocking on my door, let's explore the opportunity of working together! ↓</p>
        <ul className='social-links'>
          <li className='mail'><Link to='#' onClick={() => window.location = 'mailto:vikkbehal@gmail.com'} target="_blank"><img src={Gmail} alt="vikkbehal_email" />Lets Have a word! 😇</Link></li>
          <li className='dribbble'><Link to="https://dribbble.com/vikkbehal" target="_blank"><img src={Dribbble} alt="vikkbehal_email" />Dribbble</Link></li>
          <li className='Behance'><Link to="https://www.behance.net/vikkbehal/moodboards" target="_blank"><img src={Behance} alt="vikkbehal_email" />Behance</Link></li>
          <li className='linkedin'><Link to="https://www.linkedin.com/in/vikkbehal/" target="_blank"><img src={LinkedIn} alt="vikkbehal_email" />LinkedIn</Link></li>
          <li className='instagram'><Link to="https://www.instagram.com/ux.vikkbehal/" target="_blank"><img src={Insta} alt="vikkbehal_email" />Instagram</Link></li>
        </ul>
        <p className='footerstripe'>© 2023 Vishal Behal. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
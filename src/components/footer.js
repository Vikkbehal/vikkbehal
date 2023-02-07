import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <p className='contact-me'>My door is always open to new opportunities, so come say hello and have a chat about working together ↓</p>
        <ul className='social-links'>
          <li><Link to="">vikkbehal@gmail.com</Link></li>
          <li><Link to="">Dribbble</Link></li>
          <li><Link to="">LinkedIn</Link></li>
          <li><Link to="">Twitter</Link></li>
        </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
        <div className='logo'>
          <Link to="/">VishalBehal</Link>
          {/* <Link to="/">vikkbehal</Link> */}
        </div>
        <div className='navigation'>
          <Link to="/about">about me.</Link>
          <Link to="/work">my work.</Link>
          <Link to="/resources">resources.</Link>
          <Link to="/blog">reads.</Link>
          <Link to="/blog" className='resume' target="_blank" >My Resume</Link>
        </div>
    </header>
  )
}

export default Header
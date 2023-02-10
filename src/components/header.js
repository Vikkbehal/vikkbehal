import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
        <div className='logo'>
          <Link to="/">Vishal Behal</Link>
        </div>
        <div className='navigation'>
        <Link to="/about">about me.</Link>
            <Link to="/work">my work.</Link>
            <Link to="/blog">reads.</Link>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
        <div className='logo'>
            <p>Vishal Behal</p>
        </div>
        <div className='navigation'>
            <Link to="">my work.</Link>
            <Link to="">about me.</Link>
            <Link to="">reads.</Link>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay:0
         }}>
    <header id="header">
        <div className='logo'>
          <Link to="/">VishalBehal</Link>
          {/* <Link to="/">vikkbehal</Link> */}
        </div>
        <div className='navigation'>
          <Link to="/about">about me.</Link>
          <Link to="/work">my work.</Link>
          {/* <Link to="/resources">resources.</Link> */}
          <Link to="/blog">reads.</Link>
          <Link to="/blog" className='resume' target="_blank" >My Resume</Link>
        </div>
    </header>
    </motion.div>
  )
}

export default Header
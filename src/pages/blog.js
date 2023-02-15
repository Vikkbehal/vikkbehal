import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='main-wrapper'>
        <Header />
        <div className='blogWrapper'>
          <p className='blogTitle'>Stay Tuned for an Exciting New UX Blog!</p>
          <Link className='blogLink' to="/">Back to home.</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog
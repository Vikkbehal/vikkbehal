import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <div id="blogWrapper" className='main-wrapper'>
        <div className='blogWrapper'>
          <p className='blogTitle'>Have Patience, Resources Page is Updating....</p>
          <Link className='blogLink' to="/">Back to home.</Link>
        </div>
    </div>
  )
}

export default Resources
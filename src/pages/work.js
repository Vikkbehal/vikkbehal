import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import SelectedWork from '../components/selectedWork'

const Work = () => {
  return (
    <div className='main-wrapper'>
        <Header />
        <SelectedWork/>
        <Footer/>
    </div>
  )
}

export default Work
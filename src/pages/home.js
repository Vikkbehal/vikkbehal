import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import SelectedWork from '../components/selectedWork'

const Home = () => {
  return (
    <div id="homeWrapper" className='main-wrapper'>
        <Header />
        <Hero />
        <SelectedWork/>
        <Footer/>
    </div>
  )
}

export default Home
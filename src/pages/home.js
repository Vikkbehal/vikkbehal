import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className='main-wrapper'>
        <Header />
        <Hero />
        <Footer/>
    </div>
  )
}

export default Home
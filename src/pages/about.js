import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import IWorkWith from '../components/iWorkWith'

const About = () => {
  return (
    <div className='main-wrapper'>
        <Header />
        <Hero />
        <IWorkWith/>
        <Footer/>
    </div>
  )
}

export default About
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import IWorkWith from '../components/iWorkWith'
// import SomeSkills from '../components/someSkills'
import HeroAbout from '../components/heroAbout'

const About = () => {
  return (
    <div id="aboutWrapper" className='main-wrapper'>
        <Header />
        <HeroAbout />
        <IWorkWith/>
        <Footer/>
    </div>
  )
}

export default About
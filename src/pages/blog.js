import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import SelectedWork from '../components/selectedWork'

const Blog = () => {
  return (
    <div className='main-wrapper'>
        <Header />
        <SelectedWork/>
        <Footer/>
    </div>
  )
}

export default Blog
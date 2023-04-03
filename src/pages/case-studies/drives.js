import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const Drives = () => {
  return (
    <div className='main-wrapper'>
      <ScrollToTop />
        <Header />
        <p>Drives-case-study</p>
        <Footer/>
    </div>
  )
}

export default Drives
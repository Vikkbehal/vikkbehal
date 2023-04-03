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

const Coinshop = () => {
  return (
    <div className='main-wrapper'>
      <ScrollToTop />
        <Header />
        <p>Coinshop-case-study</p>
        <Footer/>
    </div>
  )
}

export default Coinshop
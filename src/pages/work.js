import React from "react";
import Header from "../components/header";
// import Hero from '../components/hero'
import Footer from "../components/footer";
import SelectedWork from "../components/selectedWork";

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const Work = () => {
  return (
    <section id="work">
      <div className="main-wrapper">
        <ScrollToTop />
        <Header />
        <SelectedWork />
        <Footer />
      </div>
    </section>
  );
};

export default Work;

import React from "react";
import Header from "../components/header";
import HeroWork from '../components/heroWork';
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
        <HeroWork/>
        <SelectedWork workTitle="Selected Work"  />
        <Footer />
      </div>
    </section>
  );
};

export default Work;

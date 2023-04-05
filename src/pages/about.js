import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import IWorkWith from "../components/iWorkWith";
import Experience from "../components/experience";
// import SomeSkills from "../components/someSkills";
import HeroAbout from "../components/heroAbout";

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const About = () => {
  return (
    <div id="aboutWrapper" className="main-wrapper">
      <ScrollToTop />
      <Header />
      <HeroAbout />
      <Experience />
      <IWorkWith />
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import IWorkWith from "../components/iWorkWith";
import Experience from "../components/experience";
import Education from "../components/education";
// import SomeSkills from "../components/someSkills";
import HeroAbout from "../components/heroAbout";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
      >
        <Experience />
      </motion.div>
      <IWorkWith />
      <Education />
      <Footer />
    </div>
  );
};

export default About;

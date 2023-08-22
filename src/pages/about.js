import React from "react";
import IWorkWith from "../components/iWorkWith";
import Experience from "../components/experience";
import Education from "../components/education";
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
      </motion.div>
      <Experience />
      <IWorkWith />
      <Education />
    </div>
  );
};

export default About;

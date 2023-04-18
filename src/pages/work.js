import React from "react";
import Header from "../components/header";
import HeroWork from "../components/heroWork";
import Footer from "../components/footer";
import SelectedWork from "../components/selectedWork";
import { motion } from "framer-motion";

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
        <HeroWork />
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
        >
          <SelectedWork workTitle="Selected Work" />
        </motion.div>
        <Footer />
      </div>
    </section>
  );
};

export default Work;

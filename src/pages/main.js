import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import MoreWork from "../components/moreWork";
import SelectedWork from "../components/selectedWork";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="homeWrapper" className="main-wrapper">
      <Header />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <SelectedWork workTitle="Some of My Selected Work" />
      </motion.div>
      <MoreWork />
      <Footer />
    </div>
  );
};

export default Main;

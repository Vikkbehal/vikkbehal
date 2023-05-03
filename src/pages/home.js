import React from "react";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import MoreWork from "../components/moreWork";
import SelectedWork from "../components/selectedWork";
import { motion } from "framer-motion";

const Home = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
  }, []);


  return (
    <div id="homeWrapper" className="main-wrapper">
      <Header />
      <div ref={containerRef}>
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;

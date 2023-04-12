import React from "react";
import { motion } from "framer-motion";

const HeroWork = () => {
  return (
    <section id="heroAbout">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
      >
        <h1 className="title">
          <span>Hello, I am Vishal Behal & <br /></span>& I take this opportunity to present to you my work.
        </h1>
    
      </motion.div>
    </section>
  );
};

export default HeroWork;

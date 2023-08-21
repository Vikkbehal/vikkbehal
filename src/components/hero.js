import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero">
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration:0.5,
          delay: 0.6,
        }}
      >
        {/* 🙏🏽 */}
        <p className="hello">Hello ● Bonjour ● Namastey</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration:0.5,
          delay: 0.7,
        }}
      >
      <h1 className="title">
        <span>
          My name is Vishal Behal <br />
        </span>
        {/* I’m a UX/UI */}
        I’m a UX Designer based in India, <br/>available Worldwide <span className="emoji">🌍</span>.
        {/* <span className="emoji">✏️</span>  */}
        {/* <span className="emoji">🇮🇳</span>  */}
        {/* available <span className="emoji">🌍</span> Worldwide */}
      </h1>
      <p className="resumeWrap">
        <NavLink to="https://docs.google.com/document/d/108RouT2v3r69OTyEtvZDSsx38HNYhI76C4VappXoYh4/export?format=pdf" className="resume">Résumé</NavLink>
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration:0.5,
          delay: 0.9,
        }}
      >
      <p className="desc">
      Self-taught Product Designer with 7+ years of experience in creating User Experiences & User Interfaces for Mobile and the Web. Over the past 2 years, I have had the opportunity to explore how user-centric design is used to influence the creation of these experiences. I believe that design can be used as a tool to create meaningful products, brands and experiences.
      </p>
      </motion.div>
    </section>
  );
};

export default Hero;

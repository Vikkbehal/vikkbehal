import React from "react";
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
        <p className="hello">🙏🏽 Hello ● Bonjour ● Namastey</p>
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
        I’m a Digital Product Designer
        <br />
        {/* I’m a <span className="emoji">✏️</span> UX Designer based in{" "} */}
        {/* <span className="emoji">🇮🇳</span>  */}
        from India, available Worldwide.{" "}
        {/* <span className="emoji">🌍</span> */}
        {/* available <span className="emoji">🌍</span> Worldwide */}
      </h1>
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

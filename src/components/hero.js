import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -5 }}
    whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0,
      }}
    >
      <section id="hero">
        <p className="hello">🙏🏽 Hello ● Bonjour ● Namastey</p>
        <h1 className="title">
          <span>
            My name is Vishal Behal <br />
          </span>
          I’m a Digital Product Designer<br />
          {/* I’m a <span className="emoji">✏️</span> UX Designer based in{" "} */}
          {/* <span className="emoji">🇮🇳</span>  */}
          from India, available Worldwide. <span className="emoji">🌍</span>
          {/* available <span className="emoji">🌍</span> Worldwide */}
        </h1>
        <p className="desc">
          Self-taught Product Designer from with 7+ years of experience of
          creating User Experiences & User Interfaces for Mobile and Web. Over
          the past 2 years, I have had the opportunity to explore how
          user-centric design is used to influence the creation of these
          experiences. I believe that design can be used as a tool to create
          meaningful products, brands and experiences.
        </p>
      </section>
    </motion.div>
  );
};

export default Hero;

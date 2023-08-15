import React from "react";
// import { Link } from "react-router-dom";
// import { Dribbble, Mail, Insta, LinkedIn, Behance, Gmail} from "../assets/img/social";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section id="heroAbout">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
        }}
      >
      <h1 className="title">
        <span>
          My name is Vishal Behal <br />
        </span>
        I’m a UX Designer based in India, <br/>available Worldwide <span className="emoji">🌍</span>.
      </h1>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
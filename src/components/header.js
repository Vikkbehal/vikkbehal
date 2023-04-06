import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0,
      }}
    >
      {width < 768 && (
        <header id="header">
          <div className="logo">
            <Link to="/">Vikkbehal</Link>
          </div>
          {/* <div className="navigation">
            <Link to="/about">about me.</Link>
            <Link to="/work">my work.</Link>
            <Link to="/blog">reads.</Link>
            <Link to="/blog" className="resume" target="_blank">
              Download CV
            </Link>
          </div> */}
        </header>
      )}
      {width > 768 && (
        <header id="header">
          <div className="logo">
            <Link to="/">Vikkbehal</Link>
            {/* <Link to="/">vikkbehal</Link> */}
          </div>
          <div className="navigation">
            <Link to="/about">about me.</Link>
            <Link to="/work">my work.</Link>
            {/* <Link to="/resources">resources.</Link> */}
            <Link to="/blog">reads.</Link>
            <Link to="/blog" className="resume" target="_blank">
              Download CV
            </Link>
          </div>
        </header>
      )}
    </motion.div>
  );
};

export default Header;

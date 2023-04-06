import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

const Header = () => {
  const { width } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenuState = useCallback(() => {
    setIsMenuOpen((currentValue) => !currentValue);
  }, []);

  return (
    <>
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
            <div className="logo">{/* <Link to="/">Vikkbehal</Link> */}</div>
            <div>
              <p
                className={`navigation menuStateTogger ${
                  isMenuOpen ? "open" : "closed"
                }`}
                onClick={toggleMenuState}
              >
                {!isMenuOpen ? "Menu" : ""}
              </p>
            </div>
          </header>
        )}
        {width > 768 && (
          <header id="header">
            <div className="logo">
              <Link to="/">Vikkbehal</Link>
              {/* <button
                className={`navigation menuState-${
                  isMenuOpen ? "open" : "closed"
                }`}
                onClick={toggleMenuState}
              >
                {!isMenuOpen ? "Open" : "X"}
              </button> */}
            </div>
            <div
              className={`navigation navigation-menu--${
                isMenuOpen ? "open" : "closed"
              }`}
            >
              <Link to="/about">about me.</Link>
              <Link to="/work">my work.</Link>
              <Link to="/blog">reads.</Link>
              <Link to="/blog" className="resume" target="_blank">
                Download CV
              </Link>
            </div>
          </header>
        )}
      </motion.div>
      {width < 768 && (
        <div className={`navigationFloat ${isMenuOpen ? "open" : "closed"}`}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
            >
              {/* <Link to="/about">about me. ✏️</Link>
              <Link to="/work">my work. 💼</Link>
              <Link to="/blog">reads. 📖</Link> */}
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              {/* <Link to="/blog">reads. 📖</Link> */}
              {/* <Link to="/blog" className="resume" target="_blank">
                Download CV ⬇
              </Link> */}
              {/* <Link to="/blog" className="resume" target="_blank">
                Resume
              </Link> */}
            </motion.div>
          </div>
        </div>
      )}
      {/* {width < 768 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
        >
          <div
            className={` backdrop ${isMenuOpen ? "show" : "hide"}`}
            onClick={toggleMenuState}
          ></div>
        </motion.div>
      )} */}
    </>
  );
};

export default Header;

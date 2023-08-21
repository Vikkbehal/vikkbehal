import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

import home from "../assets/img/home.svg";
import about from "../assets/img/about.svg";
import work from "../assets/img/work.svg";

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
            <div className="navigation">
            </div>
            <div
              className={`navigation navigation-menu--${
                isMenuOpen ? "open" : "closed"
              }`}
            >
              <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
                transition={{
                  duration: 0.2,
                  delay: .1,
                }}
              >
                <NavLink to="/">vikkbehal.com</NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                }}
              >
                <NavLink to="/about">about me.</NavLink>
                </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{
                  duration: 0.2,
                  delay: 0.3,
                }}
              >
                <NavLink to="/work">my work.</NavLink>
                </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{
                  duration: 0.2,
                  delay: 0.4,
                }}
              >
                <NavLink to="/blog">reads.</NavLink>
                </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{
                  duration: 0.2,
                  delay: 0.5,
                }}
              >
              <NavLink
                to="https://docs.google.com/document/d/108RouT2v3r69OTyEtvZDSsx38HNYhI76C4VappXoYh4/export?format=pdf"
                className="resume"
              >
                Résumé
              </NavLink>
              </motion.div>
            </div>
          </header>
        )}
      </motion.div>
      {width < 768 && (
        <div className={`navigationFloat ${isMenuOpen ? "open" : "closed"}`}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
            >
              <NavLink to="/">
                <div>
                  <img className="menuIcon" src={home} alt="Product Designer" />
                  <span>Home</span>
                </div>
              </NavLink>
              <NavLink to="/about">
                <div>
                  <img
                    className="menuIcon"
                    src={about}
                    alt="Product Designer"
                  />
                  <span>About</span>
                </div>
              </NavLink>
              <NavLink to="/work">
                <div>
                  <img className="menuIcon" src={work} alt="Product Designer" />
                  <span>Work</span>
                </div>
              </NavLink>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
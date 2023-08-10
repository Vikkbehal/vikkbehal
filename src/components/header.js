import React, { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            <div className="logo">
              <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
                transition={{
                  duration: 0.2,
                  delay: .1,
                }}
              >
                <Link to="/">Vishal Behal</Link>
                {/* <Link to="/">Vikkbehal</Link> */}
              </motion.div>
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
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                }}
              >
                <NavLink to="/about" activeclassname="active">about me.</NavLink>
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
                <NavLink to="/work" activeclassname="active">my work.</NavLink>
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
                <NavLink to="/blog" activeclassname="active">reads.</NavLink>
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
                {/* <NavLink
                to="https://www.dropbox.com/s/faz5sfse4sma7p2/vikkbehalResume.pdf?dl=0"
                className="resume"
                target="_blank"
              >
                Resumé
              </NavLink> */}
              <NavLink
                to="https://docs.google.com/document/d/108RouT2v3r69OTyEtvZDSsx38HNYhI76C4VappXoYh4/export?format=pdf"
                className="resume"
                // target="_blank"
              >
                Resumé
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
              {/* <Link to="/about">about me. ✏️</Link>
              <Link to="/work">my work. 💼</Link>
              <Link to="/blog">reads. 📖</Link> */}
              <NavLink to="/" activeClassName="active">
                <div>
                  <img className="menuIcon" src={home} alt="Product Designer" />
                  <span>Home</span>
                </div>
              </NavLink>
              <NavLink to="/about" activeClassName="active">
                <div>
                  <img
                    className="menuIcon"
                    src={about}
                    alt="Product Designer"
                  />
                  <span>About</span>
                </div>
              </NavLink>
              <NavLink to="/work" activeClassName="active">
                <div>
                  <img className="menuIcon" src={work} alt="Product Designer" />
                  <span>Work</span>
                </div>
              </NavLink>
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

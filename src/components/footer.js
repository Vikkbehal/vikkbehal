import React from "react";
import { Link } from "react-router-dom";
import {
  Dribbble,
  Insta,
  LinkedIn,
  Behance,
  Gmail,
} from "../assets/img/social";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <p className="contact-me">
            Unlock endless possibilities by knocking on my door, let's explore
            the opportunity of working together!<span> ↓ ↓ ↓</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <ul className="social-links">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <li className="mail">
                <Link
                  to="#"
                  onClick={() =>
                    (window.location = "mailto:vikkbehal@gmail.com")
                  }
                  target="_blank"
                >
                  <img src={Gmail} alt="vikkbehal_email" />
                  Lets talk about our next project!
                </Link>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              <li className="dribbble">
                <Link to="https://dribbble.com/vikkbehal" target="_blank">
                  <img src={Dribbble} alt="vikkbehal_email" />
                  Dribbble
                </Link>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <li className="Behance">
                <Link
                  to="https://www.behance.net/vikkbehal/moodboards"
                  target="_blank"
                >
                  <img src={Behance} alt="vikkbehal_email" />
                  Behance
                </Link>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <li className="linkedin">
                <Link
                  to="https://www.linkedin.com/in/vikkbehal/"
                  target="_blank"
                >
                  <img src={LinkedIn} alt="vikkbehal_email" />
                  LinkedIn
                </Link>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <li className="instagram">
                <Link
                  to="https://www.instagram.com/ux.vikkbehal/"
                  target="_blank"
                >
                  <img src={Insta} alt="vikkbehal_email" />
                  ux.vikkbehal
                </Link>
              </li>
            </motion.div>
          </ul>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
            >
          <p className="footerstripe">
            <span>
              © 2023 Vishal Behal | All Rights Reserved | Design & Coded with{" "}
            </span>
            💗💗
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

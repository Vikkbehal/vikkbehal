import React from "react";
// import { Link } from "react-router-dom";
// import { Dribbble, Mail, Insta, LinkedIn, Behance, Gmail} from "../assets/img/social";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section id="heroAbout">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
      >
        <h1 className="title">
          {" "}
          <span>
            Hello, I am Vishal Behal & <br />{" "}
          </span>
          I’m a ✏️ UX Designer based in 🇮🇳 India,
          <br />
          available 🌍 Worldwide
        </h1>
        <p className="desc">
          Self-taught Product Designer from with 7+ years of experience of
          creating User Experiences & User Interfaces for Mobile and Web. Over
          the past 2 years, I have had the opportunity to explore how
          user-centric design is used to influence the creation of these
          experiences. I believe that design can be used as a tool to create
          meaningful products, brands and experiences.
        </p>
        {/* <div>
        <p className="social-links-title">You can also Find me here:</p>
        <div className="social-links-wrapper">
          <ul className="social-links">
            <li className="mail">
              <Link
                to="#"
                onClick={() => (window.location = "mailto:vikkbehal@gmail.com")}
                target="_blank"
              >
                <img src={Gmail} alt="vikkbehal_email" />
                vikkbehal@gmail.com
              </Link>
            </li>
            <li className="dribbble">
              <Link to="https://dribbble.com/vikkbehal" target="_blank">
                <img src={Dribbble} alt="vikkbehal_email" />
                Dribbble
              </Link>
            </li>
            <li className="Behance">
              <Link
                to="https://www.behance.net/vikkbehal/moodboards"
                target="_blank"
              >
                <img src={Behance} alt="vikkbehal_email" />
                Behance
              </Link>
            </li>
            <li className="linkedin">
              <Link to="https://www.linkedin.com/in/vikkbehal/" target="_blank">
                <img src={LinkedIn} alt="vikkbehal_email" />
                LinkedIn
              </Link>
            </li>
            <li className="instagram">
              <Link
                to="https://www.instagram.com/ux.vikkbehal/"
                target="_blank"
              >
                <img src={Insta} alt="vikkbehal_email" />
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      </motion.div>
    </section>
  );
};

export default HeroAbout;

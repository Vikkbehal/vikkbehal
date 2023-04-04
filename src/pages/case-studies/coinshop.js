import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHeroCard from "../../components/caseStudyHeroCard";

import process from "../../assets/img/case-study/uxProcess/ux-process-blue.png";
import csbanner from "../../assets/img/case-study/coinshop/cs-banner.jpg";
import typography from "../../assets/img/case-study/coinshop/cs-typo-color.jpg";
import cs01 from "../../assets/img/case-study/coinshop/cs01.jpg";
import cs02 from "../../assets/img/case-study/coinshop/cs02.jpg";
import cs03 from "../../assets/img/case-study/coinshop/cs03.jpg";
import userflow from "../../assets/img/case-study/userflow/coinmax.png";
// import CoinmaxResult from "../../assets/img/case-study/CoinMax.jpg";

import { motion } from "framer-motion";

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const Coinshop = () => {
  return (
    <div id="case-study" className="main-wrapper">
      <ScrollToTop />
      <Header />
      {/* <div className="floatNextProject">
        <p>Next Project</p>
      </div> */}
      <div className="case-study-body-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <CaseStudyHeroCard
            sno="2"
            projectName="Coinshop (Web/Mobile)"
            overview="Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <img
            src={csbanner}
            className="case-study-hero"
            alt="Vishal Behal | UI / UX Designer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>01/ </span>The Problem(Brief)
            </h3>
            <p>
              Tartu City History Museums, established in 1955 is the umbrella
              organisation for five museums: Tartu City Museum, Song Celebration
              Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th
              Century Citizen's Museum. Together, the museums uniquely tell the
              story of Tartu focussing solely on the city and its progress
              throughout history.
            </p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>02/ </span>The Goal
            </h3>
            <p>
              Tartu City History Museums, established in 1955 is the umbrella
              organisation for five museums: Tartu City Museum, Song Celebration
              Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th
              Century Citizen's Museum. Together, the museums uniquely tell the
              story of Tartu focussing solely on the city and its progress
              throughout history.
            </p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>03/ </span>Design Process
            </h3>
            <div className="processWrapper">
              <img src={process} alt="Vishal Behal | UI / UX Designer" />
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>04/ </span>Personas(User Flows)
            </h3>
            <p>
              Tartu City History Museums, established in 1955 is the umbrella
              organisation for five museums: Tartu City Museum, Song Celebration
              Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th
              Century Citizen's Museum. Together, the museums uniquely tell the
              story of Tartu focussing solely on the city and its progress
              throughout history.
            </p>
            <div>
              <img src={userflow} alt="Vishal Behal | UI / UX Designer" />
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>05/ </span>Typography & Colors
            </h3>
            <div>
              <img src={typography} alt="Vishal Behal | UI / UX Designer" />
            </div>
          </section>
        </motion.div>
        {/* <section className='content-wrapper'>
            <h3 className='title'><span>06/</span>Wireframes</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section> */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>06/ </span>The Result
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              <img
                className="case-study-final"
                src={cs01}
                alt="Vishal Behal | UI / UX Designer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              <img
                className="case-study-final"
                src={cs02}
                alt="Vishal Behal | UI / UX Designer"
              />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              <img
                className="case-study-final"
                src={cm03}
                alt="Vishal Behal | UI / UX Designer"
              />
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              <img
                className="case-study-final"
                src={cs03}
                alt="Vishal Behal | UI / UX Designer"
              />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              <img
                className="case-study-final"
                src={cm05}
                alt="Vishal Behal | UI / UX Designer"
              />
            </motion.div> */}
            <div></div>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Coinshop;

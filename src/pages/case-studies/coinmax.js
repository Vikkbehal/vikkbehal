import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHeroCard from "../../components/caseStudyHeroCard";

import process from "../../assets/img/case-study/uxProcess/ux-process-blue.png";
import cm1 from "../../assets/img/case-study/coinmax1.png";
import typography from "../../assets/img/case-study/typo/cm-type-color.jpg";
import userflow from "../../assets/img/case-study/userflow/coinmax.png";
import cm01 from "../../assets/img/case-study/coinmax/cm01.jpg";
import cm02 from "../../assets/img/case-study/coinmax/cm02.jpg";
// import cm03 from "../../assets/img/case-study/coinmax/cm03.jpg";
import cm04 from "../../assets/img/case-study/coinmax/cm04.jpg";
import cm05 from "../../assets/img/case-study/coinmax/cm05.jpg";
// import cm02 from "../../assets/img/case-study/coinmax/2.jpg";
// import cmsplash from "../../assets/img/case-study/coinmax/cmsplash.jpg";
// import CoinmaxMBP from "../../assets/img/case-study/coinmax/coinmax-mbp.png";
import { motion } from "framer-motion";

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const Coinmax = () => {
  return (
    <div id="case-study" className="main-wrapper">
      <ScrollToTop />
      <Header />
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
            sno="1"
            projectName="Coinmax (Web/Mobile)"
            overview="CoinMax is a mobile and web-based cryptocurrency exchange project that aims to provide users with a user-friendly platform to buy, sell, and trade various digital assets. The project aims to offer competitive pricing, high security, and excellent customer support. With a user-friendly interface and robust back-end infrastructure, CoinMax aims to become a leading cryptocurrency exchange that caters to the needs of novice and advanced users alike."
            tags={[
              "Branding",
              "Product Design",
              "UI/UX",
              "Frontend (React Native)",
            ]}
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
            src={cm1}
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
                src={cm01}
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
                src={cm02}
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
                src={cm04}
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
                src={cm05}
                alt="Vishal Behal | UI / UX Designer"
              />
            </motion.div>
            <div></div>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Coinmax;

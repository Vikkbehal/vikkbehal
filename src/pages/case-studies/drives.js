import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHeroCard from "../../components/caseStudyHeroCard";

import process from "../../assets/img/case-study/uxProcess/ux-process-blue.png";
import d00 from "../../assets/img/case-study/drives/d00.jpg";
import d01 from "../../assets/img/case-study/drives/d01.jpg";
// import d02 from "../../assets/img/case-study/drives/d02.jpg";
import d03 from "../../assets/img/case-study/drives/d03.jpg";
import prototype from "../../assets/img/case-study/drives/drives-flow.jpg";
import drivestc01 from "../../assets/img/case-study/drives/drivestc01.jpg";
import drivestc02 from "../../assets/img/case-study/drives/drivestc02.jpg";
import userflow from "../../assets/img/case-study/userflow/coinmax.png";
import { motion } from "framer-motion";

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const Drives = () => {
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
            sno="3"
            projectName="Drives (Web/Mobile)"
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
            src={d00}
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
              <img
                className="case-study-final"
                src={drivestc01}
                alt="Vishal Behal | UI / UX Designer"
              />
            </div>
            <div>
              <img
                className="case-study-final"
                src={drivestc02}
                alt="Vishal Behal | UI / UX Designer"
              />
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
              <span>06/</span>Wireframes
            </h3>
            <div>
              <img src={prototype} alt="Vishal Behal | UI / UX Designer" />
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
              <span>06/ </span>The Result
            </h3>
            <div>
              <img
                className="case-study-final"
                src={d01}
                alt="Vishal Behal | UI / UX Designer"
              />
            </div>
            {/* <div>
              <img src={d02} alt="Vishal Behal | UI / UX Designer" />
            </div> */}
            <div>
              <img
                className="case-study-final"
                src={d03}
                alt="Vishal Behal | UI / UX Designer"
              />
            </div>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Drives;

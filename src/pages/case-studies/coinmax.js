import React from "react";
import CaseStudyHeroCard from "../../components/caseStudyHeroCard";

import process from "../../assets/img/case-study/uxProcess/ux-process-blue.png";
import cm1 from "../../assets/img/case-study/coinmax1.png";
import typography from "../../assets/img/case-study/typo/cm-type-color.jpg";
import userflow from "../../assets/img/case-study/userflow/coinmax.png";
import cm01 from "../../assets/img/case-study/coinmax/cm01.jpg";
import cm02 from "../../assets/img/case-study/coinmax/cm02.jpg";
import cm04 from "../../assets/img/case-study/coinmax/cm04.jpg";
import cm05 from "../../assets/img/case-study/coinmax/cm05.jpg";
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
      <div className="case-study-body-wrapper">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <CaseStudyHeroCard
            sno="1"
            projectName="Coinmax (Web/Mobile)"
            overview="CoinMax is a crypto exchange project offering a user-friendly platform to buy, sell and trade digital assets. They aim to provide competitive pricing, high security, and excellent customer support. With a user-friendly interface and strong infrastructure, they aim to become a leading exchange for both novice and advanced users."
            tags={[
              "01 Branding",
              "02 Product Design",
              "03 UI/UX",
              "04 Frontend (React Native)",
            ]}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <img
            src={cm1}
            className="case-study-hero"
            alt="Vishal Behal | UI / UX Designer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>01/ </span>The Problem (Brief)
            </h3>
            <p>Coinmax is a crypto project that requires the development of a mobile app for both iOS and Android platforms. The app should complement the existing design of the Coinmax crypto exchange, ensuring a consistent brand experience for users.</p>
            <ul>
              <li>The primary goal of the mobile app is to provide users with a seamless trading experience. Users should be able to buy and sell cryptocurrencies, track their portfolio, view real-time market data, and manage their account directly from their mobile device.</li>
              <li>To achieve this, the mobile app should feature an intuitive interface that is easy to use and navigate. It should also include all the essential trading tools and features that users need to make informed decisions, such as order types, price charts, and historical data.</li>
              <li>The app should also be secure and reliable, with built-in security features such as two-factor authentication and encryption to protect user data and prevent unauthorized access.</li>
              <li>In addition to the mobile app, Coinmax also requires a redesign of its web app. However, this redesign should not be a complete overhaul of the existing design. Instead, the web app should be updated with a modern, fresh look that aligns with the mobile app's design language.</li>
              <li>Overall, the Coinmax mobile app and web app should provide users with a seamless, secure, and reliable trading experience that meets their needs and expectations.</li>
            </ul>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>02/ </span>The Goal
            </h3>
            <p>The design goal for the Coinmax crypto project is to create a user-friendly and visually appealing mobile app that complements the existing design of the crypto exchange and provides a seamless trading experience for users. Additionally, the redesign of the web app should update the visual design while maintaining consistency with the mobile app and existing exchange design. The design should prioritize ease of use, security, and reliability to ensure user satisfaction and trust in the platform.</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
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
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <section className="content-wrapper">
            <h3 className="title">
              <span>04/ </span>User Flows
            </h3>
            <div>
              <img src={userflow} alt="Vishal Behal | UI / UX Designer" />
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
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
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
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
    </div>
  );
};

export default Coinmax;

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
import userflow from "../../assets/img/case-study/userflow/coinshop.jpg";
import prototype from "../../assets/img/case-study/coinshop/coinshop-prototype.jpg";
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
            overview="CoinShop is a mobile app that allows users to buy and sell cryptocurrency in offline markets. The app aims to make the process of buying and selling cryptocurrency easy and accessible for people who prefer to make transactions in person. With CoinShop, users can securely and conveniently trade various digital assets while enjoying the benefits of offline market transactions."
            tags={[
              "01 Branding",
              "02 Product Design",
              "03 UI/UX",
              "04 Frontend (React Native)",
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
              Our project aims to create a mobile application that facilitates
              buying and selling of cryptocurrencies such as Bitcoin (BTC) and
              Ethereum (ETH) in the offline market. The application will allow
              users to connect with other local buyers and sellers of
              cryptocurrencies in their area, creating a decentralized
              marketplace for peer-to-peer transactions.
            </p>
            <h4>Problem to Solve:</h4>
            <p>
              Cryptocurrencies are becoming increasingly popular, and their use
              is expanding beyond the online realm. While several online
              marketplaces exist for buying and selling cryptocurrencies, many
              people still prefer to transact in person, especially for larger
              transactions. However, finding local buyers and sellers of
              cryptocurrencies can be challenging, and there are security
              concerns when meeting strangers for such transactions.
            </p>
            <p>
              Our app aims to solve these problems by providing a platform that
              allows users to find and connect with local buyers and sellers of
              cryptocurrencies safely and securely. By creating a decentralized
              marketplace, we aim to make buying and selling cryptocurrencies in
              the offline market more accessible, efficient, and secure.
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
              The main goal of our project is to create a user-friendly, secure,
              and decentralized mobile application that enables local buyers and
              sellers to buy and sell cryptocurrencies like BTC and ETH in the
              offline market. We aim to make it easier for people to transact in
              person, while also ensuring that they can do so safely and
              securely. In achieving this goal, we also aim to increase the
              adoption of cryptocurrencies by making them more accessible to a
              wider range of people. By creating a decentralized marketplace for
              peer-to-peer transactions, we hope to promote the use of
              cryptocurrencies as a viable alternative to traditional
              currencies, particularly for those who prefer to transact in
              person. Ultimately, we hope that our app will contribute to the
              growth and mainstream adoption of cryptocurrencies in local
              markets around the world.
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
              <span>04/ </span>User Flows
            </h3>
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
              <span>05/</span>Wireframes
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
              <span>06/ </span>Typography & Colors
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
              <span>07/ </span>The Result
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
    </div>
  );
};

export default Coinshop;

import React from "react";
import { Link } from "react-router-dom";
import {
  Coinmax,
  Coinshop,
  Drives,
  Coinshift,
} from "../assets/img/backgrounds";
import {
  logoCoinmax,
  logoCoinshift,
  logoCoinshop,
  logoDrives,
} from "../assets/img/logos";
import {
  mobileCoinmax,
  mobileCoinshop,
  mobileDrives,
  mobileCoinshift,
} from "../assets/img/case-study/mobile";
import WorkCardMobile from "./workCardMobile";
import WorkCard from "./workCard";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

const SelectedWork = () => {
  const { width } = useWindowSize();
  return (
    <section id="selectedWork" data-test={width}>
      <p className="title">Some of My Selected Work</p>
      {width < 768 && (
        <>
          <WorkCardMobile
            bg={mobileCoinmax}
            logo={logoCoinmax}
            sno="1"
            title="Coinmax (Web/Mobile) Mobile"
            desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal"
            linkText="View Case Study"
            tags={[
              "Branding",
              "Product Design",
              "UI/UX",
              "Frontend (React Native)",
            ]}
            ctaLink="/casestudy/coinmax"
          />
          <WorkCardMobile
            bg={mobileCoinshop}
            logo={logoCoinshop}
            sno="2"
            title="Coinshop (Mobile Apps)"
            desc="Collection of three Mobile App, Customer App, Merchant App and Collection agent Application."
            linkText="View Case Study"
            tags={["Product Design", "UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/coinshop"
          />
          <WorkCardMobile
            bg={mobileDrives}
            logo={logoDrives}
            sno="3"
            title="Drives (Web/Mobile)"
            desc="Landing Page, Mobile App Redesign, Frontend (react-native)"
            linkText="View Case Study"
            tags={["UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/drives"
          />
          <WorkCardMobile
            bg={mobileCoinshift}
            logo={logoCoinshift}
            sno="4"
            title="Coinshift (Brand Guidelines)"
            desc="Brand Guidelines, Redesign Landing Page"
            linkText="View Project"
            tags={["Branding", "UI/UX"]}
            ctaLink="/casestudy/coinshift"
          />
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="view-more-work">
              <Link to="/work">
                <p>Check out my other projects for more of my work →</p>
              </Link>
            </div>
          </motion.div>
        </>
      )}

      {width > 768 && (
        <>
          <WorkCard
            bg={Coinmax}
            logo={logoCoinmax}
            sno="1"
            title="Coinmax (Web/Mobile)"
            desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal"
            linkText="View Case Study"
            tags={[
              "Branding",
              "Product Design",
              "UI/UX",
              "Frontend (React Native)",
            ]}
            ctaLink="/casestudy/coinmax"
          />
          <WorkCard
            bg={Coinshop}
            logo={logoCoinshop}
            sno="2"
            title="Coinshop (Mobile Apps)"
            desc="Collection of three Mobile App, Customer App, Merchant App and Collection agent Application."
            linkText="View Case Study"
            tags={["Product Design", "UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/coinshop"
          />
          <WorkCard
            bg={Drives}
            logo={logoDrives}
            sno="3"
            title="Drives (Web/Mobile)"
            desc="Landing Page, Mobile App Redesign, Frontend (react-native)"
            linkText="View Case Study"
            tags={["UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/drives"
          />
          <WorkCard
            bg={Coinshift}
            logo={logoCoinshift}
            sno="4"
            title="Coinshift (Brand Guidelines)"
            desc="Brand Guidelines, Redesign Landing Page"
            linkText="View Project"
            tags={["Branding", "UI/UX"]}
            ctaLink="/casestudy/coinshift"
          />
          {/* <WorkCard
            bg={Coinshift}
            logo={logoCoinshift}
            sno="5"
            title="Escher (Website)"
            desc="Redesign Mobile App & Website"
            linkText="Case study - Coming Soon"
            tags={["Branding", "UI/UX"]}
            ctaLink="/casestudy/coinshift"
          /> */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="view-more-work">
              <Link to="/work">
                <p>Check out my other projects for more of my work →</p>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default SelectedWork;

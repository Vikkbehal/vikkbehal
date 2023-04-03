import React from "react";

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
            bg={Coinmax}
            logo={logoCoinmax}
            sno="1"
            title="Coinmax (Web/Mobile) MObile"
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
            bg={Coinshop}
            logo={logoCoinshop}
            sno="2"
            title="Coinshop (Mobile Apps)"
            desc="Collection of three Mobile App, Customer App, Merchant App and Collection agent Application."
            linkText="View Case Study"
            tags={["Product Design", "UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/coinshop"
          />
          <WorkCardMobile
            bg={Drives}
            logo={logoDrives}
            sno="3"
            title="Drives (Web/Mobile)"
            desc="Landing Page, Mobile App Redesign, Frontend (react-native)"
            linkText="View Case Study"
            tags={["UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/drives"
          />
          <WorkCardMobile
            bg={Coinshift}
            logo={logoCoinshift}
            sno="4"
            title="Coinshift (Brand Guidelines)"
            desc="Brand Guidelines, Redesign Landing Page"
            linkText="View Project"
            tags={["Branding", "UI/UX"]}
            ctaLink="/casestudy/coinshift"
          />
        </>
      )}

      {width > 768 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
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
          </motion.div>
        </>
      )}
    </section>
  );
};

export default SelectedWork;

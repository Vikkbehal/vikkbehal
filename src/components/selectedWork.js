import React from "react";
// import { Link } from "react-router-dom";

import {Coinmax, Coinshop, Drives, Coinshift} from "../assets/img/backgrounds"
import {logoCoinmax, logoCoinshift, logoCoinshop, logoDrives} from "../assets/img/logos"
import WorkCardMobile from "./workCardMobile";
import WorkCard from "./workCard";

import { useWindowSize } from "react-use";

// const works = [
//   {
//     bg: Coinmax,
//     sno: "1",
//     title: "Coinmax (Web/Mobile)",
//     desc: "Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal",
//     linkText: "View Case Study",
//   },
// ];

const SelectedWork = () => {
  const { width } = useWindowSize();
  return (
    <section id="selectedWork" data-test={width}>
      <p className="title">Some of My Selected Work</p>
      {
        width < 768 && 
        <>
          <WorkCardMobile
            bg={Coinmax}
            logo={logoCoinmax}
            sno="1"
            title="Coinmax (Web/Mobile) MObile"
            desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal"
            linkText="View Case Study"
            tags={["Branding", "Product Design", "UI/UX", "Frontend (React Native)"]}
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
      }

      {
        width > 768 && 
        <>
          <WorkCard
            bg={Coinmax}
            logo={logoCoinmax}
            sno="1"
            title="Coinmax (Web/Mobile)"
            desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal"
            linkText="View Case Study"
            tags={["Branding", "Product Design", "UI/UX", "Frontend (React Native)"]}
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
        </>
      }
    </section>
  );
};

export default SelectedWork;

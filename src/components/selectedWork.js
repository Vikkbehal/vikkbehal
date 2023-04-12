import React from "react";
import {
  Coinmax,
  Coinshop,
  Drives,
  Coinshift,
  Escher
} from "../assets/img/backgrounds";
import {
  logoCoinmax,
  logoCoinshift,
  logoCoinshop,
  logoDrives,
  logoEscher
} from "../assets/img/logos";
import {
  mobileCoinmax,
  mobileCoinshop,
  mobileDrives,
  mobileCoinshift,
} from "../assets/img/case-study/mobile";
import WorkCardMobile from "./workCardMobile";
import WorkCard from "./workCard";
import { useWindowSize } from "react-use";

const SelectedWork = (props) => {
  const { width } = useWindowSize();
  return (
    <section id="selectedWork" data-test={width}>
      <p className="title">{props.workTitle}</p>
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
            ctaLink="/casestudy/01"
          />
          <WorkCardMobile
            bg={mobileCoinshop}
            logo={logoCoinshop}
            sno="2"
            title="Coinshop (Mobile Apps)"
            desc="Collection of three Mobile App, Customer App, Merchant App and Collection agent Application."
            linkText="View Case Study"
            tags={["Product Design", "UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/02"
          />
          <WorkCardMobile
            bg={mobileDrives}
            logo={logoDrives}
            sno="3"
            title="Drives (Web/Mobile)"
            desc="Landing Page, Mobile App Redesign, Frontend (react-native)"
            linkText="View Case Study"
            tags={["UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/03"
          />
          <WorkCardMobile
            bg={mobileCoinshift}
            logo={logoCoinshift}
            sno="4"
            title="Coinshift (Brand Guidelines)"
            desc="Brand Guidelines, Redesign Landing Page"
            linkText="View Project"
            tags={["Branding", "UI/UX"]}
            ctaLink="/casestudy/04"
          />
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
            ctaLink="/casestudy/01"
          />
          <WorkCard
            bg={Coinshop}
            logo={logoCoinshop}
            sno="2"
            title="Coinshop (Mobile Apps)"
            desc="Collection of three Mobile App, Customer App, Merchant App and Collection agent Application."
            linkText="View Case Study"
            tags={["Product Design", "UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/02"
          />
          <WorkCard
            bg={Drives}
            logo={logoDrives}
            sno="3"
            title="Drives (Web/Mobile)"
            desc="Landing Page, Mobile App Redesign, Frontend (react-native)"
            linkText="View Case Study"
            tags={["UI/UX", "Frontend (React Native)"]}
            ctaLink="/casestudy/03"
          />
          <WorkCard
            bg={Coinshift}
            logo={logoCoinshift}
            sno="4"
            title="Coinshift (Brand Guidelines)"
            desc="Brand Guidelines, Redesign Landing Page"
            linkText="View Project"
            tags={["Branding", "UI/UX"]}
            ctaLink="/casestudy/04"
          />
          <WorkCard
            bg={Escher}
            logo={logoEscher}
            sno="5"
            title="Escher (Web/Mobile)"
            desc="Redesign Mobile App & Website"
            linkText="Upcoming"
            tags={["Mobile App Design", "Landing Page"]}
            ctaLink="/"
          />
        </>
      )}
    </section>
  );
};

export default SelectedWork;

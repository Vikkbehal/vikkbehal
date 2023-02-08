import React from "react";
import { Link } from "react-router-dom";

import Coinmax from "../assets/img/backgrounds/coinmax.png";
import Coinshop from "../assets/img/backgrounds/coinshop.png";
import Drives from "../assets/img/backgrounds/drives.png";
import Coinshift from "../assets/img/backgrounds/coinshift.png";

import logoCoinmax from "../assets/img/logos/coinmax.png";
import logoCoinshop from "../assets/img/logos/coinshop.png";
import logoDrives from "../assets/img/logos/drives.png";
import logoCoinshift from "../assets/img/logos/coinshift.svg";

const WorkCard = (props) => {
  return (
    <div
      className="workCard"
      style={{
        backgroundImage: `url(${props.bg})`,
        color: props.textColor || "white",
        backgroundSize: "cover",
      }}
    >
      <div className="logoWrapper">
        <img className="logo" src={props.logo} />
      </div>
      <div className="contentWrapper">
        <p className="sno">● 00{props.sno}</p>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>

        <ul className="tags">
          {props.tags &&
            props.tags.map((singleTag) => (
              <li className="product-tag tag">{singleTag}</li>
            ))}
        </ul>

        <Link to="https://reactrouter.com/en/main/components/link">
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};

const works = [
  {
    bg: Coinmax,
    sno: "1",
    title: "Coinmax (Web/Mobile)",
    desc: "Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal",
    linkText: "View Case Study",
    /**
     * primaryAction: {
     *  "text": "View",
     *  "link": ""
     * }
     *
     */
  },
];

const SelectedWork = () => {
  return (
    <section id="selectedWork">
      <p className="title">Selected Work</p>
      <WorkCard
        bg={Coinmax}
        logo={logoCoinmax}
        sno="1"
        title="Coinmax (Web/Mobile)"
        desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal"
        linkText="View Case Study"
        tags={["UI/UX", "Product Design", "Frontend"]}
      />
      <WorkCard
        bg={Coinshop}
        logo={logoCoinshop}
        sno="2"
        title="Coinshop (Mobile Apps)"
        desc="Collection of three Mobile App, Customer App, Merchant App and Collection agent Application."
        linkText="View Case Study"
        tags={["UI/UX", "Frontend"]}
      />
      <WorkCard
        bg={Drives}
        logo={logoDrives}
        sno="3"
        title="Drives (Web/Mobile)"
        desc="Landing Page, Mobile App Redesign, Frontend (react-native)"
        linkText="View Case Study"
        tags={["UI/UX", "Product Design", "Frontend"]}
      />
      <WorkCard
        bg={Coinshift}
        logo={logoCoinshift}
        sno="4"
        title="Coinshift (Brand Guidelines)"
        desc="Brand Guidelines, Redesign Landing Page"
        linkText="View Case Study"
      />
    </section>
  );
};

export default SelectedWork;

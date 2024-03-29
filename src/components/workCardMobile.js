import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import arrowRight from "../assets/img/right.svg";

const WorkCardMobile = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0,
      }}
    >
      <div className="workCard">
        <div className="contentWrapper">
          <div className="mobileTitleWrap">
            <p className="sno">00{props.sno}/ </p>
            <p className="title">{props.title}</p>
          </div>
          <div className="project-image-mobile">
            <img src={props.bg} alt="vikkbehal" />
          </div>
          {/* <div className="mobileTitleWrap">
            <p className="sno">00{props.sno}/ </p>
            <p className="title">{props.title}</p>
          </div> */}
          <p className="desc">{props.desc}</p>

          <ul className="taglist">
            {props.tags &&
              props.tags.map((singleTag, i) => (
                <li
                  key={`uitags-${props.sno}--${i}`}
                  className="product-tag tag"
                >
                  {singleTag}
                </li>
              ))}
          </ul>

          <Link to={props.ctaLink} className="ctaButton">
            {props.linkText}
            {/* <img src={arrowRight} alt="Vishal Behal UX Designer" /> */}
          </Link>
        </div>
      </div>
      {/* <div
        className="workCard"
        style={{
          backgroundImage: `url(${props.bg})`,
          color: props.textColor || "white",
          backgroundSize: "cover",
        }}
      >
        <div className="logoWrapper">
          <img className="logo" src={props.logo} alt="vikkbehal" />
        </div>
        <div className="contentWrapper">
          <p className="sno">● 00{props.sno}</p>
          <p className="title">{props.title}</p>
          <p className="desc">{props.desc}</p>

          <ul className="taglist">
            {props.tags &&
              props.tags.map((singleTag, i) => (
                <li
                  key={`uitags-${props.sno}--${i}`}
                  className="product-tag tag"
                >
                  {singleTag}
                </li>
              ))}
          </ul>

          <Link to={props.ctaLink} className="ctaButton">
            {props.linkText}
          </Link>
        </div>
      </div> */}
      <hr className="divider" />
    </motion.div>
  );
};

export default WorkCardMobile;

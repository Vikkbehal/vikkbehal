import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorkCard = (props) => {
  return (
    <div
        className="workCard"
        style={{
          backgroundImage: `url(${props.bg})`,
          color: props.textColor || "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="logoWrapper">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <img className="logo" src={props.logo} alt="vikkbehal" />
          </motion.div>
        </div>
        <div className="contentWrapper">
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
          <p className="sno">00{props.sno}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
          <p className="title">{props.title}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
          <p className="desc">{props.desc}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
          <Link to={props.ctaLink} className="ctaButton">
            {props.linkText}
          </Link>
          </motion.div>
        </div>
      </div>
  );
};

export default WorkCard;

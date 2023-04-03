import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const WorkCardMobile = (props) => {
    return (
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay:0
         }}>
      <div
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
                <li key={`uitags-${props.sno}--${i}`} className="product-tag tag">
                  {singleTag}
                </li>
              ))}
          </ul>
  
          <Link target="_blank" to={props.ctaLink} className="ctaButton" >
            {props.linkText}
          </Link>
        </div>
      </div><div
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
                <li key={`uitags-${props.sno}--${i}`} className="product-tag tag">
                  {singleTag}
                </li>
              ))}
          </ul>
  
          <Link target="_blank" to={props.ctaLink} className="ctaButton" >
            {props.linkText}
          </Link>
        </div>
      </div>
         </motion.div>
    );
  };


export default WorkCardMobile;

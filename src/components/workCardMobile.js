import React from 'react'
import { Link } from "react-router-dom";

const WorkCardMobile = (props) => {
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
    );
  };


export default WorkCardMobile;

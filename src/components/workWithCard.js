import React from "react";
import { motion } from "framer-motion";

const WorkWithCard = (props) => {
  return (
    <div className="workWithCard">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <img className="logo" src={props.CompanyLogo} alt="vikkbehal" />
        <p className="title">{props.MyRoll}</p>
        <p className="myRoll">{props.MyRollExp}</p>
      </motion.div>
    </div>
  );
};

export default WorkWithCard;

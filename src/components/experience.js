import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = (props) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -5 }}
    whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.15,
      }}
    >
      <div className="experienceWrapper">
        <div className="titleWrapper">
          <p className="title">{props.title}</p>
          <p className="titlesno">0{props.sno}</p>
        </div>
        <hr />
        <div className="experienceDetailsWrapper">
          <p className="position">{props.position}</p>
          <p className="period">{props.period}</p>
          <p className="whatidid">{props.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="main-wrapper">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <p className="title">Work Experience History 💼</p>
      </motion.div>
      <ExperienceCard
        title="Coinshift"
        sno="1"
        position="UI & Graphic Designer"
        period="Mar 2022 - Oct 2022"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
      <ExperienceCard
        title="Coinshop - Formerly Bittmax "
        sno="2"
        position="Product Designer"
        period="Dec 2018 - Mar 2022"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
      <ExperienceCard
        title="Vevsa Technologies"
        sno="3"
        position="UI Designer"
        period="Mar 2018 - Dec 2018"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
      <ExperienceCard
        title="SNA Power - Software and Technology"
        sno="4"
        position="UI & Web Designer"
        period="Jul 2017 - Mar 2018"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
      <ExperienceCard
        title="1neclick Online Pvt. Ltd."
        sno="5"
        position="UI Designer"
        period="Jan 2016 - Jul 2017"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
    </section>
  );
};
export default Experience;

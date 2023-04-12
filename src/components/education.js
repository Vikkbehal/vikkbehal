import React from "react";
import { motion } from "framer-motion";

const EducationCard = (props) => {
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
        <p className="period">{props.period}</p>
        <p className="whatidid">{props.role}</p>
      </div>
    </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="experience" className="main-wrapper">
      <p className="title">My Education 📖</p>
      <EducationCard
        title="BCA (Bachelor of Computer Application)"
        sno="1"
        period="Apr 2011 - Jul 2014"
        role="Bachelor of Computer Applications (BCA) is a three-year undergraduate program that focuses on computer science, programming languages, database management, and web development. The course curriculum is designed to provide students with a strong foundation in computer applications, making them competent in the IT industry."
      />
      <EducationCard
        title="High School"
        sno="2"
        period="2010"
        role="I have completed high school with Physics, Chemistry, and Mathematics."
      />
    </section>
  );
};
export default Education;

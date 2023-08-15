import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Experience = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.15,
      }}
    >
      <div className="resumeExperience">
        <p className="companyName">
          <span>{props.companyName}</span>
          <span> / </span>
          <span>{props.post}</span>
        </p>
        <p className="timeline">{props.duration}</p>
        <p className="description">{props.description}</p>
      </div>
    </motion.div>
  );
};

const Contact = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.15,
      }}
    >
      <Link to={props.where} target={props.target}>{props.name}</Link>
    </motion.div>
  );
};

const Education = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.15,
      }}
    >
      <div className="resumeEducation">
        <p className="collegeName">{props.collegeName}</p>
        <p className="timeline">{props.duration}</p>
        <p className="description">{props.description}</p>
      </div>
    </motion.div>
  );
};

const Skills = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.15,
      }}
    >
      <div className="resumeSkills">
        <p className="skillname">{props.skillHeadline}</p>
        <p className="skilllist">
          {props.skills &&
            props.skills.map((singleSkill, i) => (
              <span key={`uiskills-${props.sno}--${i}`} className="skill">
                {singleSkill},
              </span>
            ))}
        </p>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <div id="resumeWrap" className="main-wrapper">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
        }}
      >
        <div className="resume">
          <div className="resumeWrapper">
            <hr />
            <div className="introWrapper">
              <h1 className="name">Vishal Behal</h1>
              <h3 className="post">Digital Product Designer</h3>
            </div>
            <div className="linkWrapper">
              <Contact name="vikkbehal.com" where="/" />
              <Contact name="linkedin" where="https://www.linkedin.com/in/vikkbehal/" target="_blank"/>
              <Contact name="vikkbehal@gmail.com" where="#" />
              <Contact name="+91-9501009151" where="#" />
            </div>
            <hr />
            <p className="description">
              Self-taught Product Designer with 7+ years experience in UX/UI
              design for mobile and web. Skilled in user research, prototyping,
              and wireframing. Passionate about creating user-centric and
              aesthetically pleasing digital experiences. Firm believer that
              design can drive meaningful products and brands. Eager to apply
              knowledge and expertise to deliver exceptional results.
            </p>
            <hr />
            <div className="bottomWrapper">
              <div className="workWrapper">
                <div className="flexxer">
                  <h2>Work Experience</h2>
                  <Experience
                    companyName="Coinshift"
                    post="UI Designer"
                    duration="Mar 2022 - Oct 2022"
                    description="Assisted in Dashboard Design/Redesign Landing Page/ Designed Brand Guidelines."
                  />
                  <Experience
                    companyName="Coinshop"
                    post="Product Designer"
                    duration="Mar 2022 - Oct 2022"
                    description="Product Designer and UI Developer for Various In-House Projects."
                  />
                  <Experience
                    companyName="Vevsa"
                    post="UX/UI Designer"
                    duration="Mar 2018 - Dec 2018"
                    description="UI / UX Designer for Multiple Projects and Product Designer for In-House Startup Idea."
                  />
                  <Experience
                    companyName="SNA Power"
                    post="UI & Web Developer"
                    duration="Jul 2017 - Mar 2018"
                    description="UI designer/ UI Developer for Multiple In-House Projects and Wordpress Developer."
                  />
                  <Experience
                    companyName="1neclick pvt. ltd."
                    post="UI Designer & Developer"
                    duration="Jan 2016 - Jul 2017"
                    description="User interface designer for web and Mobile Applications (iOS + Android)."
                  />
                  <Experience
                    companyName="itech Titan"
                    post="Intern"
                    duration="Jun 2015 - Jan 2016"
                    description="Assisted in UI Design and Wordpress Development."
                  />
                </div>
                <div className="flexxer">
                  <h2>Education</h2>
                  <Education
                    collegeName="Lyallpur Khalsa College"
                    duration="2011-2014"
                    description="Bachelor of Computer Application"
                  />
                  <Education
                    collegeName="Doaba College"
                    duration="2010"
                    description="High School with Physics, Chemistry and Maths."
                  />
                </div>
                <div className="flexxer">
                  <h2>Skills</h2>
                  <Skills
                    skillHeadline="Design Skills"
                    skills={[
                      "User-centred design",
                      "Information architecture",
                      " Visual design",
                      " Interaction design",
                      " Mind-Mapping",
                      " Design thinking",
                      " Communication",
                      " Collaboration",
                    ]}
                  />
                  <Skills
                    skillHeadline="UX Methods"
                    skills={[
                      "User Research",
                      "Personas",
                      "User Flows",
                      "Wireframing",
                      "Prototyping",
                      "Usability Testing",
                      "Analytics",
                    ]}
                  />
                  <Skills
                    skillHeadline="Tools"
                    skills={[
                      "Figma",
                      "Adobe XD",
                      "SketchApp",
                      "InVision",
                      "Zeplin",
                      "UXPin",
                      "Adobe Photoshop",
                      "Adobe Illustrator",
                      "Microsoft Suite",
                    ]}
                  />
                  <Skills
                    skillHeadline="Development"
                    skills={["HTML", "CSS", "SCSS", "JavaScript", "ReactJS"]}
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;

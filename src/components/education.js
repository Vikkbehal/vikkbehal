import React from "react";

const ExperienceCard = (props) => {
  return (
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
  );
};

const Education = () => {
  return (
    <section id="experience" className="main-wrapper">
      <p className="title">My Education 📖</p>
      <ExperienceCard
        title="BCA (Bachelor of Computer Application)"
        sno="1"
        position="UI & Graphic Designer"
        period="Mar 2022 - Oct 2022"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
      <ExperienceCard
        title="High School"
        sno="2"
        position="Product Designer"
        period="Dec 2018 - Mar 2022"
        role="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
      />
    </section>
  );
};
export default Education;

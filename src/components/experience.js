import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = (props) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
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
        role="In my role at Coinshift, I took on the responsibility of crafting informative empty states for dashboards, offering clear and succinct guidance to users. Additionally, I undertook a comprehensive overhaul of the landing page, enhancing both user satisfaction and the conversion rate. Leveraging my proficiency across a range of essential applications such as Microsoft Suite, Adobe Suite, and Figma, I consistently delivered effective solutions and contributed to the team's success."
      />
      <ExperienceCard
        title="Coinshop / Bittmax "
        sno="2"
        position="UX/UI, Product Designer"
        period="Mar 2018 - Mar 2022"
        role=" I undertook the design and development of multiple mobile apps, design systems, and dashboards. I took a user-centric approach, crafting interfaces that effectively addressed the needs of both users and stakeholders. Collaborating seamlessly with cross-functional teams, I ensured the seamless translation of designs into practical implementations. My efforts culminated in the successful and timely launch of various mobile apps and design systems, all accomplished within stipulated budgets. Additionally, I contributed to the creation of diverse in-house products, spanning software applications, websites, and marketing materials. By engaging with clients, I adeptly gathered requirements and specifications, consistently delivering projects punctually and within budget. My track record showcases a demonstrated ability to thrive both independently and within collaborative team settings."
      />
      <ExperienceCard
        title="SNA Power - Software and Technology"
        sno="3"
        position="UI & Graphic Designer"
        period="Jul 2017 - Mar 2018"
        role="I have contributed significantly to my company by spearheading the design and development of websites using the WordPress platform. My role involved close collaboration with clients, adeptly gathering their unique requirements and offering tailored solutions to meet their specific needs. This dual focus on creative design and effective problem-solving has been instrumental in enhancing our web development projects."
      />
      <ExperienceCard
        title="1neclick Online Pvt Ltd"
        sno="4"
        position="Web & UI Designer"
        period="Jan 2016 - Jul 2017"
        role="I spearheaded the creation and optimization of dynamic landing pages and Android mobile applications characterized by high-speed performance. My proficiency encompasses a spectrum of technologies including HTML, CSS, SASS, along with foundational skills in JavaScript and jQuery."
      />
    </section>
  );
};
export default Experience;

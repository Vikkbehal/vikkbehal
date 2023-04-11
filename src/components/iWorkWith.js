import React from "react";
import {
  Coinmax,
  Coinshift,
  Coinshop,
  Cyber,
  Drives,
  FortisForma,
  Max,
  Iterative,
  Peercoin,
  Techalpha,
  Vevsa,
} from "../assets/img/companyIcon";
import WorkWithCard from "./workWithCard";
import { motion } from "framer-motion";

const IWorkWith = () => {
  return (
    <section id="iWorkWith" className="main-wrapper">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <p className="mainTitle">
          All the Brands & Company’s <span>i’ve worked with as</span> UX/UI
          Designer, Product Designer, Graphic Designer :
        </p>
      </motion.div>
      <div className="workWithCardWrapper">
        <WorkWithCard
          CompanyLogo={Coinshift}
          MyRoll="UI & Graphic Designer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Coinshop}
          MyRoll="Product Design/ UX Developer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Coinmax}
          MyRoll="Product Designer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Techalpha}
          MyRoll="UI/UX Designer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={FortisForma}
          MyRoll="UI/UX Designer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Drives}
          MyRoll="UI Designer / UI Developer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Peercoin}
          MyRoll="UI/UX Designer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Vevsa}
          MyRoll="Product Deisgner"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Iterative}
          MyRoll="UI Developer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Cyber}
          MyRoll="UI/UX Developer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <WorkWithCard
          CompanyLogo={Max}
          MyRoll="UI/UX Designer"
          MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
        />
        <div className="workWithCard">
          <p className="manymoreTitle">
            <span>& Many More</span> 😇
          </p>
        </div>
      </div>
    </section>
  );
};

export default IWorkWith;

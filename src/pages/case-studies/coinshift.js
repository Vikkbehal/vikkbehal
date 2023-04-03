import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHeroCard from "../../components/caseStudyHeroCard";

import {
  Splash,
  Content,
  One,
  Brandmark,
  Safespace,
  Two,
  Three,
  Four,
  Five,
  Six,
  PrimaryColor,
  Colorpalette,
  Font1,
  Font2,
  Thumbnail,
  Icons1,
  Icons2,
  Icons3,
  Logo,
  Logobw,
  BCard,
  Env,
  Outro,
} from "../../assets/img/case-study/coinshift";

import { useEffect } from "react";
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const Coinshift = () => {
  return (
    <div id="case-study" className="main-wrapper">
      <ScrollToTop />
      <Header />
      <div className="case-study-body-wrapper">
        <CaseStudyHeroCard
          sno="4"
          projectName="Coinshift (Brand Guidelines)"
          overview="Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history."
        />
        <section className="projectImgWrapper">
          <img src={Splash} alt="Vishal Behal | UI / UX Designer" />
          <img src={Content} alt="Vishal Behal | UI / UX Designer" />
          <img src={One} alt="Vishal Behal | UI / UX Designer" />
          <img src={Brandmark} alt="Vishal Behal | UI / UX Designer" />
          <img src={Safespace} alt="Vishal Behal | UI / UX Designer" />
          <img src={Two} alt="Vishal Behal | UI / UX Designer" />
          <img src={PrimaryColor} alt="Vishal Behal | UI / UX Designer" />
          <img src={Colorpalette} alt="Vishal Behal | UI / UX Designer" />
          <img src={Three} alt="Vishal Behal | UI / UX Designer" />
          <img src={Font1} alt="Vishal Behal | UI / UX Designer" />
          <img src={Font2} alt="Vishal Behal | UI / UX Designer" />
          <img src={Four} alt="Vishal Behal | UI / UX Designer" />
          <img src={Logo} alt="Vishal Behal | UI / UX Designer" />
          <img src={Logobw} alt="Vishal Behal | UI / UX Designer" />
          <img src={Thumbnail} alt="Vishal Behal | UI / UX Designer" />
          <img src={Five} alt="Vishal Behal | UI / UX Designer" />
          <img src={Icons1} alt="Vishal Behal | UI / UX Designer" />
          <img src={Icons2} alt="Vishal Behal | UI / UX Designer" />
          <img src={Icons3} alt="Vishal Behal | UI / UX Designer" />
          <img src={Six} alt="Vishal Behal | UI / UX Designer" />
          <img src={BCard} alt="Vishal Behal | UI / UX Designer" />
          <img src={Env} alt="Vishal Behal | UI / UX Designer" />
          <img src={Outro} alt="Vishal Behal | UI / UX Designer" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Coinshift;

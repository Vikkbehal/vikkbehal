import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import MoreWork from "../components/moreWork";
import SelectedWork from "../components/selectedWork";

const Home = () => {
  return (
    <div id="homeWrapper" className="main-wrapper">
      <Header />
      <Hero />
      <SelectedWork workTitle="Some of My Selected Work" />
      <MoreWork/>
      <Footer />
    </div>
  );
};

export default Home;

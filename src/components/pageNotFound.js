import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div id="pnfWrapper" className="main-wrapper">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
        }}
      >
        <div className="pnfWrapper">
          <p className="pnfTitle">Whoops!</p>
          <p className="pnfdescription">It seems like we couldn't find the page you were looking for</p>
          {/* <Link className="pnfLink" to="/">
            Back to Home.
          </Link> */}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PageNotFound;

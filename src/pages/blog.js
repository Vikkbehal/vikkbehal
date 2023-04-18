import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div id="blogWrapper" className="main-wrapper">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
      >
        <div className="blogWrapper">
          <p className="blogTitle">Stay Tuned for an Exciting New UX Blog!</p>
          <Link className="blogLink" to="/">
            Back to Home.
          </Link>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Blog;

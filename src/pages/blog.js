import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div id="blogWrapper" className="main-wrapper">
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
    </div>
  );
};

export default Blog;

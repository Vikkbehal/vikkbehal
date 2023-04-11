import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MoreWork = () => {
  return (
    <div className="moreWorkContainer">
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
            <div className="view-more-work">
              <p>Check out my other projects for more of <Link to="/work"><span>my work →</span></Link></p>
            </div>
          </motion.div>
    </div>
  );
};
export default MoreWork;
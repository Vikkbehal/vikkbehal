import "./styles/main.scss";
import Router from "./router";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const myDiv = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (myDiv.current) {
      myDiv.current.classList.toggle("dark");
      myDiv.current.classList.toggle("light");
    }
  };

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <div ref={myDiv} className={isDarkMode ? "dark App" : "light App"}>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "Spring", stiffness: 100, duration: 0.1 }}
      >
        <div className="point"></div>
      </motion.div>
      {/* <button className="toggleTheme" onClick={toggleDarkMode}>Dark</button> */}
      <Router />
    </div>
  );
}

export default App;

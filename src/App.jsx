import { useEffect, useState, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";
import img1 from "../src/images/1.png";
import img2 from "../src/images/2.png";
import img3 from "../src/images/3.png";
import img4 from "../src/images/4.png";
import img5 from "../src/images/5.png";

const images = [img1, img2, img3, img4, img5];

function App() {
  const carousel = useRef();
  const [width, setwidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current);
    setwidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <div className="App">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;

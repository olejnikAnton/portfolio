import { useEffect, useState } from "react";
import "./Preloader.css";

import img1 from "../assets/preload/1.png";
import img2 from "../assets/preload/2.png";
import img3 from "../assets/preload/3.png";
import img4 from "../assets/preload/4.png";
import img5 from "../assets/preload/5.png";
import img6 from "../assets/preload/6.png";

const images = [img1, img2, img3, img4, img5, img6];

function Preloader({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex >= images.length) {
      onComplete?.();
      return;
    }

    const durations = [600, 500, 500, 500, 500, 1300];

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, durations[currentIndex]);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  if (currentIndex >= images.length) {
    return null;
  }
  return (
    <div
      className="preloader"
      style={{
        background: "rgb(0, 0, 0)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="test"
        style={{ maxWidth: "80vw", maxHeight: "80vh" }}
      />
    </div>
  );
}

export default Preloader;

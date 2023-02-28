import React, { useState } from "react";
import "./Slider.scss";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

interface SliderProps {
  data: Array<string>;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((curr) => (curr === 0 ? 2 : curr - 1));
  };

  const handleNext = () => {
    setCurrentSlide((curr) => (curr === 2 ? 0 : curr + 1));
  };

  return (
    <div className="slider">
      <div
        className={"slider_container"}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((image, index) => (
          <img src={image} alt="text" key={index} />
        ))}
      </div>
      <div className={"slider_icons"}>
        <div className={"slider_icon"} onClick={handlePrevious}>
          <WestIcon />
        </div>
        <div className={"slider_icon"} onClick={handleNext}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;

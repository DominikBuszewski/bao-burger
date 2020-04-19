import React, { useState } from "react";
import "./gallery.styles.scss";
import GalleryItem from "../gallerry-item/gallery-item.component";
import photo1 from "../../assets/gallery images/photo1.jpg";
import photo2 from "../../assets/gallery images/photo2.jpg";
import photo3 from "../../assets/gallery images/photo3.jpg";
import photo4 from "../../assets/gallery images/photo4.jpg";
import photo5 from "../../assets/gallery images/photo5.jpg";

const GallerySlider = () => {
  let sliderArr = [
    <GalleryItem src={photo1} />,
    <GalleryItem src={photo2} />,
    <GalleryItem src={photo3} />,
    <GalleryItem src={photo4} />,
    <GalleryItem src={photo5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="slide-left" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="slide-right" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default GallerySlider;

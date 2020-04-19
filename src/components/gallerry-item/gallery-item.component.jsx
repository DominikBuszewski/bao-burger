import React from "react";

const GalleryItem = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
  };
  return <img src={src} alt="slide gallery img" style={imgStyles}></img>;
};

export default GalleryItem;

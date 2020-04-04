import React from "react";
import "./menu-item.styles.scss";

const MenuItem = (id, name, price, ingridients, imageUrl) => (
  <div className="menu-item">
    <div className="menu-item-image">{imageUrl}</div>
    <div className="menu-item-description">
      <div className="menu-id-number">{id}</div>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="ingridients">{ingridients}</div>
    </div>
  </div>
);

export default MenuItem;

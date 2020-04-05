import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ id, name, price, imageUrl }) => (
  <div className="menu-item">
    <div
      className="menu-item-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="menu-item-description">
      <div className="menu-id-number">Menu number:{id}</div>
      <div className="name">{name}</div>
      <div className="price">{price}$</div>
    </div>
  </div>
);

export default MenuItem;

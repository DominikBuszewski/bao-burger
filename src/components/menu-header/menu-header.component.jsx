import React from "react";
import "./menu-header.styles.scss";

const MenuHeaderButton = ({ category }) => (
  <div className="menu-nav-bar">
    <button className="category">{category}</button>
  </div>
);

export default MenuHeaderButton;

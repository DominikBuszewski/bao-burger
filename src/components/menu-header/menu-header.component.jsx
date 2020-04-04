import React from "react";
import "./menu-header.styles.scss";

const MenuHeader = () => (
  <div className="menu-nav-bar">
    <ul className="categories">
      <li className="category">Burgers</li>
      <li className="category">Drinks</li>
      <li className="category">Others</li>
    </ul>
  </div>
);

export default MenuHeader;

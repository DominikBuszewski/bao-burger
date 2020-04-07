import React from "react";
import "./menu-header.styles.scss";

const MenuHeader = ({ filter }) => (
  <div className="menu-header">
    <button className="menu-header-button" onClick={filter} value="all">
      All
    </button>
    <button className="menu-header-button" onClick={filter} value="burgers">
      Burgers
    </button>
    <button className="menu-header-button" onClick={filter} value="drinks">
      Drinks
    </button>
    <button className="menu-header-button" onClick={filter} value="other">
      Other
    </button>
  </div>
);

export default MenuHeader;

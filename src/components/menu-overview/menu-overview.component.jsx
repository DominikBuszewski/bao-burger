import React from "react";
import "./menu-overview.styles.scss";

const MenuOverview = ({ items }) => (
  <div className="menu-overview">
    <div className="overview">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
);
export default MenuOverview;

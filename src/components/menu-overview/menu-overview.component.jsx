import React from "react";
import "./menu-overview.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const MenuOverview = ({ items }) => (
  <div className="menu-overview">
    <div className="manu-container">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default MenuOverview;

import React from "react";
import "./menu-overview.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const MenuOverview = ({ items }) => (
  <div className="menu-overview">
    {items.map(({ id, imageUrl, name, price }) => (
      <MenuItem key={id} imageUrl={imageUrl} name={name} price={price} />
    ))}
  </div>
);
export default MenuOverview;

import React from "react";
import "./menu-overview.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const MenuOverview = ({ items }) => (
  <div className="menu-overview">
    {items.map(({ id, imageUrl, name, price, category }) => (
      <MenuItem
        key={id}
        imageUrl={imageUrl}
        name={name}
        price={price}
        category={category}
      />
    ))}
  </div>
);
export default MenuOverview;

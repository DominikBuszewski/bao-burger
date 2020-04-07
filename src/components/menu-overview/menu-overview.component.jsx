import React from "react";
import "./menu-overview.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const MenuOverview = ({ items }) => (
  <div className="menu-overview">
    {items.map(({ id, name, price, imageUrl, category }) => (
      <MenuItem
        key={id}
        name={name}
        price={price}
        imageUrl={imageUrl}
        category={category}
      />
    ))}
  </div>
);

export default MenuOverview;

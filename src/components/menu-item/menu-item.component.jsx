import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";
import "./menu-item.styles.scss";

const MenuItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="menu-item">
      <div
        className="menu-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="menu-item-description">
        <div className="menu-id-number">{id}</div>
        <div className="name">{name}</div>
        <div className="price">{price}$</div>
      </div>
      <button className="add-button" onClick={() => addItem(item)}>
        Add to cart
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(MenuItem);

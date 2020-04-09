import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="item-name">{name}</span>
      <span className="item-quantity">{quantity}</span>
      <span className="item-price">{price}$</span>
    </div>
    <button className="remove-button">X</button>
  </div>
);

export default CartItem;

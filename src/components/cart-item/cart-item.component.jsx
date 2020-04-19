import React from "react";
import "./cart-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CartItem = ({ item, clearItem, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={imageUrl} alt="item" className="item-detail" />
        <span className="item-detail">{name}</span>
        <span className="item-detail">
          <button className="arrows" onClick={() => removeItem(item)}>
            &#10094;
          </button>
          <span className="value">{quantity}</span>
          <button className="arrows" onClick={() => addItem(item)}>
            &#10095;
          </button>
        </span>
        <span className="item-detail">{price}$</span>
        <button
          className="item-detail remove-button"
          onClick={() => clearItem(item)}
        >
          &#10008;
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);

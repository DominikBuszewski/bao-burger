import React from "react";
import "./cart-overview.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const CartOverview = ({ cartItems }) => (
  <div className="cart-overview">
    <div className="cart-details">
      <div className="cart-detail"></div>
      <div className="cart-detail">NAME</div>
      <div className="cart-detail">QUANTITY</div>
      <div className="cart-detail">PRICE</div>
      <div className="cart-detail remove">REMOVE</div>
    </div>
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <button className="order-button">ORDER NOW</button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartOverview);

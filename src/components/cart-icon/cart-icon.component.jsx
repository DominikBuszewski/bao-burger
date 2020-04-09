import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import { connect } from "react-redux";

const CartIcon = ({ itemCount }) => (
  <div className="cart-icon">
    <span className="item-count">{itemCount}</span>
    <ShoppingIcon className="shopping-icon" />
  </div>
);

const mapStateToProps = (dispatch) => ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(CartIcon);

import React from "react";
import "./cart-overview.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import StripeButton from "../stripe-button/stripe-button.component";

const CartOverview = ({ cartItems }) => (
  <div className="cart-overview">
    <div className="cart-details">
      <div className="cart-detail">DISH</div>
      <div className="cart-detail">NAME</div>
      <div className="cart-detail">AMOUNT</div>
      <div className="cart-detail">PRICE</div>
      <div className="cart-detail remove">REMOVE</div>
    </div>
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <div className="total-amount-to-pay">
      <p>
        TOTAL PAYMENT:
        {cartItems.reduce(
          (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity * cartItem.price,
          0
        )}
        $
      </p>
    </div>
    <div className="payment">
      <StripeButton />
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartOverview);

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_S4PC2LF8WcmSpAxHCO60WadJ00VvEv5g9O";

  const onToken = (token) => {
    alert("You have successfuly ordered burger. Congratulations!");
  };

  return (
    <StripeCheckout
      label="Order Now"
      name="Bao Burger"
      shippingAddress
      description={`To pay:${price}$`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;

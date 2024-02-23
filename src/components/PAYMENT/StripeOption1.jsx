import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OmYgeGUnxyubwNLD3ZzraiAkOlMyX0KtaMxsfg2PQ3cUKAtag5cdD8g0fJ8AFm7uARtonQnm1Ii2ciwpwF8XWou00ieN94tsk"
);

const StripeOption1 = ({ productForCheckout }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: productForCheckout,

      mode: "payment",
      successUrl: "http://localhost:3000/successfulPayment",
      cancelUrl: "http://localhost:3000/deniedPayment",
    });
    if (error) {
      console.error("Something went wrong at the checkout:", error.message);
    }
  };
  return (
    <button
      className="px-4 py-2 rounded fw-bold text-white"
      onClick={() => {
        handleClick();
      }}
    >
      Checkout
    </button>
  );
};

export default StripeOption1;

"use client";
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51LhzE8I6wVwKALkikNFgJeq4ETcFxJdqwnBUUG4yJVoToRTpECNCNAK0YzF0x9CmQlm7zZ9RYZjloNbw8Al3Zfya009GZoGqOb");

const CheckoutButton = () => {
  const fetchClientSecret = useCallback(async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ title: 'mango' }],
        amount: 5000, // amount in cents
      }),
    });

    // const data = await response.json();
    // return data.clientSecret;
    const checkoutSession = await response.json();
  
     
      // Redirecting user/customer to Stripe Checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.id,
      });
      dispatch(emptyCart())
      console.log(result)
      if (result.error) {
        alert(result?.error.message);
      }
  }, []);

  const options = { fetchClientSecret };

  
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutButton;

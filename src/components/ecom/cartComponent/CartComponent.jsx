"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./cart.module.scss";
import Image from "next/image";
import { quicksand } from "@/app/layout";
import { Button, Divider } from "@mui/material";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "@/redux/features/cart/cartSlice";
import { AuthContext } from "@/context/AuthContext";
const stripePromise = loadStripe(
 process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const CartComponent = () => {
  const [loading, setLoading] = useState(false);
  const [allcarts, setAllCarts] = useState([]);
  const location = localStorage.getItem("location");
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { users } = useContext(AuthContext);
  useEffect(() => {
    setAllCarts(cartItems);
  }, [cartItems]);

  const removeSingleItem = async (id) => {
    try {
      dispatch(removeItem(id));
    } catch (error) {
      console.log("error while deleting the product", error);
    }
  };
  const calculateTotalPrice = () => {
    return allcarts.reduce((total, currentItem) => {
      return total + parseInt(currentItem.price); // Assuming price is a string, parse it to integer before summing
    }, 0); // Initial value for total
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/checkout_sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartItems: allcarts.map((item) => ({
              name: item.productName,
              quantity: 1, // Adjust quantity as needed
              unit_amount: parseInt(item.price) * 100, // Convert price to cents
              description: item.description,
              images: item.productImages || ["https://via.placeholder.com/150"],
            })),
          }), // Correctly stringify the JSON body
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { id } = await response.json();
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (error) {
        console.error("Error redirecting to Stripe Checkout:", error);
      } else {
        dispatch(clearCart());
      }
    } catch (error) {
      console.error("Error during checkout process:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.headre_text}>
        <h2 className={`${styles.heading} ${quicksand.variable}`}>Your Cart</h2>
        <p className={quicksand.variable}>
          There are <span>{allcarts?.length}</span> products in your cart
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.cart_details}>
          <table>
            <thead>
              <tr className={quicksand.variable}>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {allcarts.length > 0 ? (
                allcarts.map((data) => (
                  <tr>
                    <td>
                      <Image
                        src={data.catImg}
                        width={100}
                        height={100}
                        alt="product"
                        objectFit="cover"
                      />
                      <div className={styles.p_detail}>
                        <h4 className={quicksand.variable}>
                          {data.productName.substring(0, 20) + "..."}
                        </h4>
                        <p className={quicksand.variable}>
                          {data.description.substring(0, 100)}
                        </p>
                      </div>
                    </td>
                    <td>{data.price}</td>
                    <td>1</td>
                    <td>{data.price}</td>
                    <td>
                      <button onClick={() => removeSingleItem(data.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p style={{ padding: "1rem", textAlign: "center" }}>
                  nothing in the cart ...
                </p>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.bill}>
          <div className={styles.wrapper}>
            <div className={styles.bill_wrapper}>
              <div className={styles.box}>
                <h4>Subtotal</h4> <p>Rs. {calculateTotalPrice()}</p>
              </div>
              <Divider style={{ width: "100%", color: "black" }} />
              <div className={styles.box}>
                <h4>Estimate for</h4>{" "}
                <p style={{ color: "black" }}>{location}</p>
              </div>
              <Divider style={{ width: "100%", color: "black" }} />
              <div className={styles.box}>
                <h4>Total</h4>
                <p>Rs. {calculateTotalPrice()}</p>
              </div>
            </div>
            {users !== null ? (
              <Button onClick={handleCheckout} disabled={loading}>
                {loading ? "Loading..." : "proceed to checkout"}
              </Button>
            ) : (
              <Button disabled>
                login your id first
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;

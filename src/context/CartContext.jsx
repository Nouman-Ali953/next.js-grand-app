"use client";
import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [allCartItems, setAllCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ allCartItems, setAllCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

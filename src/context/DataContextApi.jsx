"use client";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContextApi = createContext();

export const DataContextApiProvider = ({ children }) => {
  const [productData, setProductData] = useState();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/productData");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <DataContextApi.Provider value={productData}>
      {children}
    </DataContextApi.Provider>
  );
};

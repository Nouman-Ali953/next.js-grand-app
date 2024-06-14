"use client";
import React, { useEffect, useState } from "react";
import styles from "./shop.module.scss";
import axios from "axios";
import ProductCart from "@/components/products/ProductCart";
const Shopping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapiserver.reactbd.com/tech"
        );
        setProducts(res.data);
        return res.data;
      } catch (error) {
        console.log("error while getting the data api response");
      }
    };

    getDataFromApi();
  }, []);
  return (
    <>
      <div className={styles.container}>
        {products?.map((data) => (
          <>
            <ProductCart product={data} key={data.id} />
          </>
        ))}
      </div>
    </>
  );
};

export default Shopping;

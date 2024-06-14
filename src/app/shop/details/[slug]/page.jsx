"use client";
import SingleProduct from "@/components/ecom/singleProduct/SingleProduct";
import Subcribe from "@/components/ecom/subscribe/Subcribe";
import { DataContextApi } from "@/context/DataContextApi";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const SinglePage = () => {
  const productData = useContext(DataContextApi);
  const params = useParams();
  const [product, setProduct] = useState([]);
  const allProducts = [];
  useEffect(() => {
    if (productData) {
      productData.forEach((category) => {
        category.items.forEach((item) => {
          item.products.forEach((product) => {
            if (parseInt(params.slug) === product.id) {
              allProducts.push(product);
            }
          });
        });
      });
    }
    setProduct(allProducts);
  }, [productData]);
  return (
    <>
      <SingleProduct product={product}/>
      <Subcribe />
    </>
  );
};

export default SinglePage;

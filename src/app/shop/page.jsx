"use client";
import React, { useState, useEffect, useContext } from "react";
import Slick from "@/components/ecom/slick/Slick"; // Assuming correct import path
import LongSlider from "@/components/ecom/long_slider/LongSlider"; // Assuming correct import path
import Banners from "@/components/ecom/banners/Banners"; // Assuming correct import path
import Products from "@/components/ecom/products/Products"; // Assuming correct import path
import AfterProducts from "@/components/ecom/afterProducts/AfterProducts"; // Assuming correct import path
import Subcribe from "@/components/ecom/subscribe/Subcribe"; // Assuming correct import path
import { DataContextApi } from "@/context/DataContextApi";
import styles from "./shop.module.scss";
import { quicksand } from "../layout";
import Link from "next/link";

const Shop = () => {
  const productData = useContext(DataContextApi);
  const [activeTab, setActiveTab] = useState(); // Initial active tab
  const [categories, setCategories] = useState([]); // Array to store unique categories
  const [activeTabData, setActiveTabData] = useState([]); // Filtered product data
  const [allFirst, setAllFirst] = useState([]); // Array to store unique categories
  const [allCategies, setAllCategories] = useState([]); // Array to store unique categories

  const allFirstProducts = [];
  const allCategory = [];
  useEffect(() => {
    if (productData) {
      productData?.forEach((category) => {
        category.items.forEach((item) => {
          allCategory.push(item.cat_name);
          item.products.forEach((product) => {
            allFirstProducts.push(product);
          });
        });
      });
    }
    setAllFirst(allFirstProducts);
    setAllCategories(allCategory);
  }, [productData]);
  useEffect(() => {
    if (!productData) return; // Handle potential absence of productData

    const uniqueCategories = new Set(); // Efficiently collect unique categories

    productData.forEach((item) => {
      item.items?.forEach((item_) => {
        uniqueCategories.add(item_.cat_name); // Add unique category names
      });
    });

    setCategories(Array.from(uniqueCategories)); // Convert Set to an array
  }, [productData]);

  useEffect(() => {
    if (!productData) return; // Handle potential absence of productData

    const filteredData = productData.flatMap((item) =>
      item.items
        .filter((item_) => item_.cat_name === activeTab) // Filter by activeTab
        .flatMap((item_) =>
          item_.products?.map((product) => ({
            ...product,
            parentCatName: item.cat_name,
            subCatName: item_.cat_name,
          }))
        )
    );

    setActiveTabData(filteredData);
  }, [productData, activeTab]);

  const handleTabClick = (cat) => {
    setActiveTab(cat);
  };

  return (
    <>
      <Slick />
      <LongSlider />
      <Banners />
      <div className={styles.filters_functionality}>
        <h2>Popular Products</h2>
        <ul>
          {categories.map((cat, index) => (
            <li key={index} className={quicksand.variable}>
              <a
                className={`${activeTab === cat ? styles.active : ""}`}
                onClick={() => handleTabClick(cat)}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container_product}>
        {activeTabData.length > 0 ? (
          activeTabData.map((item, index) => (
            <div key={index}>
              <Products tag={item.type} item={item} />
            </div>
          ))
        ) : allFirst.length > 0 ? (
          allFirst.map((item, index) => (
            <div key={index}>
              <Products
                tag={item.type}
                item={item}
                category={allCategies[index]}
                id={item.id}
                data-aos="fade-up"
              />
            </div>
          ))
        ) : (
          <p>no data to show here</p>
        )}
      </div>
      <AfterProducts related="no" />
      <Subcribe />
    </>
  );
};

export default Shop;

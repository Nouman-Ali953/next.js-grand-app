"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import styles from "./catproduct.module.scss";
import Products from "../products/Products";
import { quicksand } from "@/app/layout";
import icon_1 from "@/assets/images/icon-1.svg";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import styled from "@emotion/styled";
import "./index.css";
import { Button } from "@mui/material";
import { DataContextApi } from "@/context/DataContextApi";
import { useParams } from "next/navigation";
function valuetext(value) {
  return `${value}°C`;
}
const SliderOk = styled(Slider)({
  color: "green",
});

const CatProducts = () => {
  const productData = useContext(DataContextApi);
  const [products, setProducts] = useState([]);

  const params = useParams();

  const allProducts = [];
  if (!params.id) {
    useEffect(() => {
      if (productData) {
        productData.forEach((category) => {
          if (category.cat_name.toLowerCase() === params.slug.toLowerCase()) {
            category.items.forEach((item) => {
              item.products.forEach((product) => {
                allProducts.push(product);
              });
            });
          }
        });
        setProducts(allProducts);
      }
    }, []);
  }

  if (params.id && params.id.length > 0) {
    useEffect(() => {
      if (productData) {
        productData.forEach((category) => {
          category.items.forEach((item) => {
            if (
              item.cat_name.toLowerCase().replace(/\s/g, "-") ===
              params.id.replace(/%26/g, "&")
            ) {
              item.products.forEach((product) => {
                allProducts.push(product);
              });
            }
          });
        });
        setProducts(allProducts);
      }
    }, []);
  }

  const [value, setValue] = React.useState([20, 12137]);

  const prevValue = useRef(value);

  useEffect(() => {
    if (
      prevValue.current[0] !== value[0] ||
      prevValue.current[1] !== value[1]
    ) {
      if (productData) {
        productData.forEach((category) => {
          if (!params.id) {
            if (category.cat_name.toLowerCase() === params.slug.toLowerCase()) {
              category.items.forEach((item) => {
                item.products.forEach((product) => {
                  if (product.price >= value[0] && product.price <= value[1]) {
                    allProducts.push(product);
                  }
                });
              });
            }
          }

          productData.forEach((category) => {
            category.items.forEach((item) => {
              if (params.id && params.id.length > 0) {
                if (
                  item.cat_name.toLowerCase().replace(/\s/g, "-") ===
                  params.id.replace(/%26/g, "&")
                ) {
                  item.products.forEach((product) => {
                    if (
                      product.price >= value[0] &&
                      product.price <= value[1]
                    ) {
                      allProducts.push(product);
                    }
                  });
                }
              }
            });
          });
        });
        setProducts(allProducts);
      }
    }
    prevValue.current = value;
  }, [value, setValue]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.cat_container}>
            {" "}
            <h2 className={quicksand.variable}>Category</h2>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} />{" "}
              <h6>Milks & Dairies</h6> <span>30</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Clothes</h6>{" "}
              <span>21</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} />{" "}
              <h6>Baking Material</h6> <span>0</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Fresh Food</h6>{" "}
              <span>3</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Pet Foods</h6>{" "}
              <span>11</span>{" "}
            </div>
          </div>
          <div className={styles.cat_price}>
            <h2 className={quicksand.variable}>Fill by price</h2>
            <div className={`${styles.slider} ${quicksand.variable}`}>
              <SliderOk
                min={0}
                max={60000}
                step={1}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color="success"
                getAriaValueText={valuetext}
                useRef={prevValue}
                style={{ color: "green" }}
              />
              <div className={styles.price_span}>
                To:<span>Rs{value[0]}</span>
                From:<span>Rs{value[1]}</span>
              </div>
              <h6 className={quicksand.variable}>Color</h6>
              <div className={styles.color}>
                <div>
                  <input type="checkbox" />

                  <span>Red</span>
                </div>
                <div>
                  <input type="checkbox" color="success" />
                  <span>Green</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>White</span>
                </div>
              </div>
              <h6 className={quicksand.variable}>Item Condition</h6>
              <div className={styles.condition}>
                <div>
                  <input type="checkbox" />

                  <span>New</span>
                </div>
                <div>
                  <input type="checkbox" />

                  <span>Refurbished</span>
                </div>
                <div>
                  <input type="checkbox" />

                  <span>Used</span>
                </div>
              </div>
            </div>
            <Button>
              <span>
                <FilterAltIcon />
                Filter
              </span>
            </Button>
          </div>
        </div>
        <div className={styles.products}>
          {products.length > 0 ? (
            products?.map((item) => <Products item={item} tag={"Hot"} />)
          ) : (
            <p
              style={{
                margin: "auto",
                letterSpacing: "2px",
                marginTop: "-30rem",
              }}
            >
              no products avalable to show here
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CatProducts;

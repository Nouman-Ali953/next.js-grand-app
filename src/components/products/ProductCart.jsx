import React from "react";
import styles from "./product.module.scss";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
const ProductCart = ({ product }) => {
  return (
    
      <div className={styles.wrapper} key={product._id}>
        <Image src={product.image} width={201} height={250} alt="im" />
        <hr />
        <div className={styles.posDiv}>
          <span>
            <HiShoppingCart />
          </span>
          <span>
            <FaHeart />
          </span>
        </div>
        <div className={styles.innerDiv}>
          <p style={{ color: "gray", fontSize: "13px", marginTop: "-9px" }}>
            {product.category}
          </p>
          <p  style={{ marginTop: "4px" }}>{product.title}</p>
          <p
            style={{
              marginTop: ".5rem",
              color: "gray",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            {product.description.substring(0, 120)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "-10px",
              right: "7px",
              fontWeight: "bold",
            }}
          >
            {product.price}$
          </p>
        </div>
        <button>add to cart</button>
      </div>
  );
};

export default ProductCart;

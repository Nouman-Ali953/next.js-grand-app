"use client";
import React, { useState } from "react";
import styles from "./products.module.scss";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Tooltip from "../tooltip/Tooltip";
import { quicksand } from "@/app/layout";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/cart/cartSlice";
const Products = ({ item, tag, category, id }) => {
  const [text, setText] = useState("Add");
  const dispatch = useDispatch();
  const StyledRating = withStyles({
    root: {
      color: "#3bb77e",
    },
    iconFilled: {
      color: "#ff6d75",
    },
    iconHover: {
      color: "#fff",
      backgroundColor: "#000",
    },
  })(Rating);

  const changeTxt = async (newItem) => {
    if (text === "Added") {
      setText("Add");
    } else {
      setText("Added");
    }
    const itemToPost = {
      ...newItem,
      id: String(newItem.id), // Ensure id is a string
    };
    try {
      await axios.post("http://localhost:3000/cartItems ", itemToPost);
      dispatch(add(itemToPost));
    } catch (error) {
      console.log("item didnot added");
    }
  };
  const value = item?.rating;
  const setCat = (cat) => {
    const catfilter = cat ? cat.toLowerCase() : "TV & Speaker";

    localStorage.setItem("category", catfilter);
  };
  return (
    <>
      <div className={styles.wrapper} onClick={() => setCat(category)} 
      data-aos="fade-up" data-aos-anchor-placement="top-center">
        <span className={styles.tag}>Hot</span>
        <Link href={`/shop/details/${item.id}`}>
          <div className={styles.img}>
            <Image
              src={item?.catImg}
              width={200}
              height={200}
              alt="ok"
              className={styles.hov_image}
            />
            <span className={styles.toolcheck}>
              <Tooltip title="favorite">
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
              <Tooltip title={"compare"}>
                <CompareArrowsOutlinedIcon />
              </Tooltip>
              <Tooltip title={"quick view"}>
                <RemoveRedEyeOutlinedIcon />
              </Tooltip>
            </span>
          </div>
        </Link>
        <div className={styles.info}>
          <Link href={`/shop/details/${item.id}`}>
            <h6 className={`${styles.title} ${quicksand.variable}`}>
              {item?.productName?.substring(0, 35)}
            </h6>
            <p style={{ paddingTop: ".4rem" }}>
              By <span>{item?.brand}</span>
            </p>
            <StyledRating
              name="text-feedback"
              value={value}
              style={{ fontSize: ".9rem", paddingTop: ".2rem" }}
              readOnly
              precision={0.5}
              className={styles.color}
              icon={
                <StarIcon
                  style={{ opacity: 1, color: "red" }}
                  fontSize="inherit"
                />
              }
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.37 }}
                  fontSize="inherit"
                  className={styles.colors}
                />
              }
            />
          </Link>
          <div className={styles.price}>
            <h6>Rs {item?.price}</h6> <p>Rs {item?.oldPrice}</p>
            {text === "Added" ? (
              <button onClick={() => changeTxt(item)} disabled>
                <ShoppingCartOutlinedIcon />
                {text}
              </button>
            ) : (
              <button onClick={() => changeTxt(item)}>
                <ShoppingCartOutlinedIcon />
                {text}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

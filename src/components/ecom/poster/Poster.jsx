"use client"

import React from "react";
import styles from "./poster.module.scss";
import CatProducts from "../catProduct/CatProducts";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const Poster = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Snack</h2>
          <ul>
            <HomeOutlinedIcon
              style={{
                fill: "green",
                marginRight: "-0.5rem",
                fontSize: "20px",
                paddingBottom: ".11rem",
                fontWeight:'100'
              }}
            />
            <li>Home</li> <KeyboardArrowRightIcon />
            <li>Shop</li> <KeyboardArrowRightIcon />
            <li>Snack</li>
          </ul>
        </div>
      </div>
      <div>
        <CatProducts />
      </div>
    </>
  );
};

export default Poster;

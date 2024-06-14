import React from "react";
import styles from "./bread.module.scss";
import { quicksand } from "@/app/layout";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import { KeyboardArrowRight } from "@mui/icons-material";
const BreadCome = () => {
  return (
    <>
      <div className={styles.container}>
        <ul>
          <HomeOutlined
            style={{
              fill: "#3BB77E",
              marginRight: "-0.5rem",
              fontSize: "20px",
              paddingBottom: ".11rem",
              fontWeight: "100",
            }}
          />
          <li>Home</li> <KeyboardArrowRight />
          <li>Shop </li> <KeyboardArrowRight />
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default BreadCome;

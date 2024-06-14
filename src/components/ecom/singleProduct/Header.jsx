import React from "react";
import styles from "./header.module.scss";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { quicksand } from "@/app/layout";
const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={quicksand.variable}>
        <HomeOutlinedIcon
          style={{
            fill: "#3BB77E",
            marginRight: "-0.5rem",
            fontSize: "20px",
            paddingBottom: ".11rem",
            fontWeight: "100",
          }}
        />
        <li>Home</li> <KeyboardArrowRightIcon />
        <li> Vegetables & Tubers </li> <KeyboardArrowRightIcon />
        <li> Seeds Of Change Organic</li>
      </ul>
    </div>
  );
};

export default Header;

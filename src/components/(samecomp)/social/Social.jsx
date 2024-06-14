"use client";
import React, { useContext, useState } from "react";
import styles from "./social.module.scss";
import {
  Facebook,
  Subscriptions,
  Instagram,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { ThemeContext } from "@/context/ThemeContext";
const Social = () => {
  const [mode, setMode] = useState(false);
  const {theme,toggle} = useContext(ThemeContext)
  const ThemeIconChange = () => {
    setMode(!mode);
    toggle()
  };
  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.box} ${styles.theme}`}
          onClick={ThemeIconChange}
        >
          {mode ? (
            <>
              <LightMode /> <span>LightMode</span>
            </>
          ) : (
            <>
              <DarkMode style={{ color: "black" }} />{" "}
              <span style={{ color: "black" }}>DarkMode</span>
            </>
          )}
        </div>
        <div className={`${styles.box} ${styles.facebook}`}>
          <Facebook />
          <span>Facebook</span>
        </div>
        <div className={`${styles.box} ${styles.instagram}`}>
          <Instagram />
          <span>Instagram</span>
        </div>
        <div className={`${styles.box} ${styles.youtube}`}>
          <Subscriptions />
          <span>Youtube</span>
        </div>
      </div>
    </>
  );
};

export default Social;

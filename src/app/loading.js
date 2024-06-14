import React from "react";
import styles from "./page.module.css";
export default function loading() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.loader}></div>
      </div>
    </>
  );
}

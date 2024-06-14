import React from "react";
import styles from "./discover.module.css";
import Link from "next/link";
const DiscoverContainer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.discover}>
        <div className={styles["black-shadow"]}></div>
        <div className={styles.content}>
          <h1>Discover More</h1>
          <p>Find assets you've never seen before</p>
          <Link href={"/about"}>Discover</Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverContainer;

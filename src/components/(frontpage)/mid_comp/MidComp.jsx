"use client"
import React from "react";
import styles from "./mis.module.scss";
import Image from "next/image";
import { PlayArrow } from "@mui/icons-material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
const MidComp = () => {
    const [playVideo , isPlayVideo] = useState(false)
    const handleVideoPlay = () => {
        isPlayVideo(!playVideo)
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>The best part? Everything.</h2>
        <div className={styles.box}>
          <CheckCircleOutline />
          <h4>Stick to your budget</h4>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>
        </div>
        <div className={styles.box}>
          <CheckCircleOutline />
          <h4>Get quality work done quickly</h4>
          <p>
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </p>
        </div>
        <div className={styles.box}>
          <CheckCircleOutline />
          <h4>Pay when you're happy</h4>
          <p>
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <Image src="/selling_proposition.webp" width={600} height={380} />
        <PlayArrow onClick={handleVideoPlay}/>
      </div>
    </div>
  );
};

export default MidComp;

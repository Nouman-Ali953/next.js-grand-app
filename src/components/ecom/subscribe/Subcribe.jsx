import React from "react";
import styles from "./subscribe.module.scss";
import Image from "next/image";
import backpng from "@/assets/images/bg.png";
import backpng1 from "@/assets/images/newsletter.png";
import { quicksand } from "@/app/layout";
import { Button } from "@mui/material";
const Subcribe = () => {
  return (
    <>
      <div className={styles.container} 
      data-aos="zoom-in" data-aos-anchor-placement="top-center">
      <Image src={backpng1} objectFit="contain" quality={100} className={styles.newsletter}/>
        <div className={styles.image_section}>
          <Image
            src={backpng}
            objectFit="contain"
            alt="bg-image"
            quality={100}
          />
        </div>
        <div className={styles.contant}>
          <h2 className={quicksand.variable} 
          data-aos="zoom-in" data-aos-anchor-placement="top-center">
            Stay home & get your daily needs from our shop
          </h2>
          <p
          data-aos="zoom-in" data-aos-anchor-placement="top-center">
            Start You'r Daily Shopping with <span>Nest Mart</span>{" "}
          </p>
          <div className={styles.subscribe}>
            <input type="text" placeholder="Your Email Address" className={quicksand.variable}/>
            <Button>Subcribe</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcribe;

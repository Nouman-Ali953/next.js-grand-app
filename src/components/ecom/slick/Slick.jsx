"use client";
import React from "react";
import styles from "./slick.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "/public/slider-1.png";
import Slider2 from "/public/slider-2.png";
import Image from "next/image";
import { Button } from "@mui/material";
import { quicksand } from "@/app/layout";
const Slick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className={styles.container}>
      <Slider
        {...settings}
        className={`${styles.home_slider_main} ${styles["slick-dots"]}`}
      >
        <div className={`${styles.wrapper} ${styles["slick-active"]}`}>
          <Image src={Slider1} layout="fill" objectFit="cover" />
          <div className={styles.info}>
            <h2 className={quicksand.variable}>
              Don’t miss amazing
              <br />
              grocery deals
            </h2>
            <p>Sign up for the daily newsletter</p>
            <div className={styles.news_letter}>
              <input
                // Handle changes in the input field
                placeholder="Subscribe our newsletter"
                type="text"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <Image src={Slider2} layout="fill" objectFit="cover" />
          <div className={styles.info}>
            <h2 className={quicksand.variable}>
              Fresh Vegetables
              <br />
              Big discount
            </h2>
            <p>Sign up for the daily newsletter</p>
            <div className={styles.news_letter}>
              <input
                // Handle changes in the input field
                placeholder="Subscribe our newsletter"
                type="text"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;

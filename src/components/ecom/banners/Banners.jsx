"use client";
import React from "react";
import styles from "./banner.module.scss";
import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";
import Image from "next/image";

const Banners = () => {
  const imgs = [
    { id: 1, srcImg: banner1 },
    { id: 2, srcImg: banner2 },
    { id: 3, srcImg: banner3 },
  ];
  return (
    <>
      <div className={styles.container} data-aos="fade-up" data-aos-anchor-placement="top-center">
        {imgs.map((data) => (
          <Image
            src={data.srcImg}
            alt="banner_image"
            className={styles.banner_image}
            quality={100}
            style={{borderRadius:'50px'}}
            key={data.id}
          />
        ))}
      </div>
    </>
  );
};

export default Banners;

import React from "react";
import styles from "./branding.module.css";
import Image from "next/image";
const BrandImg = [
  "/netflix.png",
  "/meta.png",
  "/google.png",
  "/pag.png",
  "/paypal.png",
];
const Branding = () => {
  return (
    <div className={styles.branding}>
      {BrandImg.map((img) => (
        <Image
          src={img}
          width={100}
          height={70}
          alt="ok"
          className={styles.brand_img}
        />
      ))}
    </div>
  );
};

export default Branding;

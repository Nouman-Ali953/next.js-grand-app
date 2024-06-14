"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Silder from "@/components/(frontpage)/silder/Silder";
import DiscoverContainer from "@/components/(frontpage)/discover/DiscoverContainer";
import SignImg from "@/components/(frontpage)/sign_up/SignImg";
import MidComp from "@/components/(frontpage)/mid_comp/MidComp";
import Image from "next/image";
import Branding from "@/components/(frontpage)/branding/Branding";
const IMAGES = [
  "/car.jpg",
  "/ecom1.jpg",
  "/ecom2.jpg",
  "/man2.jpg",
  "/Blog_1.jpg",
];

const popular = [
  { id: 1, title: "e-commerce" },
  { id: 2, title: "blogs" },
  { id: 3, title: "new arrivals" },
  { id: 4, title: "AI services" },
];

const HomePage = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        {IMAGES.map((image, index) => (
          <ImageItem
            key={index}
            src={image}
            currentIndex={colorIndex}
            index={index}
            alt='same'
          />
        ))}
        <div className={styles.brand}>
          <div className={styles.title}>
            <h2>Find the right commerce service, right away</h2>
          </div>
          <div className={styles.search}>
            <form action="#" className={styles.form_search}>
              <input
                type="text"
                placeholder="Search here for e-commerce and blogs..."
              />
              <button type="submit" className={styles.button}>
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className={styles.popular}>
            <h3> Popular: </h3>{" "}
            {popular.map((pop) => (
              <div key={pop.id} className={styles.pop}>
                {pop.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Social/> */}
      <Branding/>
      <Silder />
      <MidComp />
      <DiscoverContainer />
      <SignImg />
    </div>
  );
};

const ImageItem = ({ src, currentIndex, index }) => {
  const isActive = currentIndex === index;
  const opacity = isActive ? 1 : 0;

  return (
    <div
      className={` ${isActive && styles.active}`}
      style={{
        opacity,
        height: "120vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Image
        alt="Mountains"
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ opacity, zIndex: "-1" }}
        className={styles.image_item}
      />
    </div>
  );
};

export default HomePage;

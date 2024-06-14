import React from "react";
import styles from "./slider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { bannerData } from "@/utils/rawData";
import Image from "next/image";
const Silder = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.slider}>
      <Carousel
        responsive={responsive}
        autoPlay="true"
        infiniteLoop="true"
        stopOnHover="true"
        showThumbs={false}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        className={`${styles.carousel} `}
      >
        {
          bannerData.map((data)=>(
            <div>
              <Image layout="fill" src={data.url} key={data.id} alt="k"/>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

export default Silder;

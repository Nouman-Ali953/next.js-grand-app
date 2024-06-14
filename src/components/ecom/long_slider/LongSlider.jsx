"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imag from "@/assets/images/noData.webp";
import Image from "next/image";
import "./index.css";

const prodData = [
  { id: 1, title: "Widget", color: "#fffceb" },
  { id: 2, title: "Gadget", color: "#ecffec" },
  { id: 3, title: "Gizmo", color: "#feefea" },
  { id: 4, title: "Thingamajig", color: "#fff3ff" },
  { id: 5, title: "Doohickey", color: "#fff3eb" },
  { id: 6, title: "Whatchama", color: "#fffceb" },
  { id: 7, title: "Contraption", color: "#ecffec" },
  { id: 8, title: "Gizzmo", color: "#fff3ff" },
  { id: 9, title: "Widget", color: "#f2fce4" },
  { id: 10, title: "Doodad", color: "#fff3eb" },
];

const LongSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    fade: false,
    arrows: true,
    autoplay: true,
  };

  return (
    <>
      <h2 className="title">Featured Categories</h2>
      <Slider key={1} className="home_slider_main" {...settings}>
        {prodData.map((data) => (
          <>
            <div
              key={data.id}
              className="info"
              style={{ display: "none", backgroundColor: data.color }}
            >
              <Image src={Imag} alt={data.title} width={50} height={50} />
              <h6>{data.title}</h6>
              <p>50% discount</p>
            </div>
          </>
        ))}
      </Slider>
    </>
  );
};

export default LongSlider;

"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./after.module.scss";
import postImage from "/public/nature.png";
import Image from "next/image";
import { Button } from "@mui/material";
import Slider from "react-slick";
import { quicksand } from "@/app/layout";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Products from "../products/Products";
import "./after.scss";
import { DataContextApi } from "@/context/DataContextApi";
const AfterProducts = ({related}) => {
  const [productData, setProductData] = useState([]); // Initialize with empty array
  const products = useContext(DataContextApi);
  
  const cat = localStorage.getItem('category')
  const catArr = []
  useEffect(() => {
    const catfilter = cat  ?  cat.toLowerCase() :'electronics' ;

    products && products.map((item)=>{
      item.items.map((item_)=>{
          if (item_.cat_name.toLowerCase() === catfilter) {
          item_.products.map((_item_data)=>{
              catArr.push(_item_data)
          })
        }
        })
    })
    const filteredData = catArr.filter((item,index)=> catArr.indexOf(item) === index ) 
    setProductData(filteredData)
  }, [products]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
  };
  return (
    <>
      <div className={`${quicksand.variable} ${styles.post_title}`}>
      {
        related === 'no' ?
        <h2 className={quicksand.variable} >Daily Best Sells</h2>:
        <h2 className={quicksand.variable} style={{marginLeft:'6rem'}}>Related Products</h2>
      }
        {/* <ul>
          <li>Featured</li>
          <li>Popular</li>
          <li>New Added</li>
        </ul> */}
      </div>
      <div className={styles.container} style={related === 'no' ? {}:{width:'100%',marginLeft:'-2rem'}}>
      {
        related === 'no' ?
        <div className={styles.post}>
          <Image src={postImage} quality={100} objectFit="cover" />
          <div className={styles.para}>
            <h2 className={quicksand.variable}>Bring nature into your home</h2>
            <Button>
              shop now{" "}
              <span>
                <ArrowRightAltOutlinedIcon />
              </span>
            </Button>
          </div>
        </div> : ''
      }
        <div className={styles.half_slider} style={related === 'no'? {}:{width:'90%',marginLeft:'9rem'}}>
          <Slider {...settings} className="post_slider">
          {productData.length > 0 ? (
          productData.map((item, index) => (
            <div key={index}>
              <Products tag={item.type} item={item} />
            </div>
          ))
        ) : (
          <p>No products found in this category.</p> // Optional: Display message
        )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AfterProducts;

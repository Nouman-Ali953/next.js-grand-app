"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Logo from "@/assets/images/logo.svg";
import { Divider } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Select from "../select_drop/Select";
import axios from "axios";
import { LocationOn } from "@mui/icons-material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CartIcons from "./cartIcons/CartIcons";
import { quicksand } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SelectData = [
  { id: 0, title: "Milks and Dairies" },
  { id: 1, title: "Juices and Drinks" },
  { id: 2, title: "Clothing and beauty" },
  { id: 3, title: "Fresh SeaFoad" },
  { id: 4, title: "Pet food and Toy" },
  { id: 5, title: "Fast Food" },
  { id: 6, title: "Baking Material" },
  { id: 7, title: "Vegetables" },
  { id: 8, title: "Fresh Food" },
  { id: 9, title: "Bread and Juices" },
  { id: 10, title: "Meal and Meat" },
];
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [countryData, setCountryData] = useState();

  let location = localStorage.getItem("location");

  const path = usePathname();
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const countries = res.data.data.map((item) => item.country);
        setCountryData(countries);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.column}>
        <Link href="/shop">
          <Image src={Logo} width={110} height={110} alt="Logo" />
        </Link>
      </div>
      <div
        className={`${styles.headerS} ${isClicked ? "" : styles.borderI}`}
        onClick={handleClick}
        style={{ zIndex: "123465" }}
      >
        <Select
          SelectData={SelectData}
          placeholder="All categories"
          remain={false}
        />
        <Divider
          style={{
            width: ".6px",
            height: "16px",
            backgroundColor: "gray",
            margin: "0px 8px 0px 0px",
          }}
        />
        <div className={styles.search}>
          <input
            type="text"
            placeholder="search anything here"
            className={quicksand.variable}
          />
          <Search />
        </div>
      </div>
      {path === "/shop/cart" ? (
        ""
      ) : (
        <div className={styles.countryWrapper}>
          <FmdGoodOutlinedIcon />
          <Select
            SelectData={countryData}
            placeholder={location}
            remain={true}
          />
        </div>
      )}
      {path === "/shop/cart" ? (
        <div style={{ marginLeft: "3rem" }}>
          <CartIcons />
        </div>
      ) : (
        <CartIcons />
      )}
    </div>
  );
};

export default Header;

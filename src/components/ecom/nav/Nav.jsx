// Nav.js
"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./nav.module.scss";
import { Button } from "@mui/material";
import { GridView, KeyboardArrowDown, Headset } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import icon_1 from "@/assets/images/icon-1.svg";
import { quicksand } from "@/app/layout";
import { DataContextApi } from "@/context/DataContextApi";
const Nav = () => {
  const [visible, setVisible] = useState(false);
  const productData = useContext(DataContextApi);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonContainerRef.current &&
        !buttonContainerRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [visible]);
  const make_visible = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      <div className={styles["grid-container"]}>
        <div className={`${styles.item} ${styles.item1}`}>
          <Button onClick={make_visible} className={quicksand.variable}>
            <GridView />
            Browse All Categories
            <KeyboardArrowDown
              style={{
                transform: visible ? "rotate(180deg)" : "",
                transition: ".2s ease",
              }}
            />
          </Button>
          <div
            className={`${styles.button_container} ${
              visible ? styles.visible : ""
            }`}
            ref={buttonContainerRef}
          >
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} />{" "}
              <h6>Milks & Dairies</h6> <span>02</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} />{" "}
              <h6>Milks & Dairies</h6> <span>12</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Pet Foods</h6>{" "}
              <span>55</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Clothes</h6>{" "}
              <span>30</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} />{" "}
              <h6>Baking Material</h6> <span>14</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Fresh Food</h6>{" "}
              <span>1</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Clothes</h6>{" "}
              <span>12</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Sweat honey</h6>{" "}
              <span>40</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Fast Food</h6>{" "}
              <span>3</span>{" "}
            </div>
            <div className={`${styles.box} ${quicksand.variable}`}>
              <Image src={icon_1} width={27} height={27} /> <h6>Happy Food</h6>{" "}
              <span>20</span>{" "}
            </div>
          </div>
        </div>
        <div className={`${styles.item} ${styles.item2} ${quicksand.variable}`}>
          <ul>
            <Link href='/shop' style={{textDecoration:'none'}}>

            <li>Home</li>
            </Link>
            {productData &&
              productData.map((item, index) => {
                return (
                  <li className={styles.drop_menu_li_ok} key={index} >
                  
                    <Link href={`/categories/${item.cat_name}`} style={{textDecoration:'none'}}>{item.cat_name} </Link>
                    <KeyboardArrowDown />
                    {item.items && (
                      <div
                        className={`${styles.drop_menu_wrapper} ${quicksand.variable}`}
                      >
                        <ul className={styles.drop_menu_ul}>
                          {item.items.map((item_, index_) => {
                            return (
                              <li key={index_} className={quicksand.variable}>
                                <Link
                                  className={quicksand.variable}
                                  href={`/categories/${item.cat_name.toLowerCase()}/${item_.cat_name
                                    .replace(/\s/g, "-")
                                    .toLowerCase()}`}
                                >
                                  {item_.cat_name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            <li>Shop</li>
            <li className={styles.mega_li}>
              Mega menu
              <KeyboardArrowDown />
              <div className={styles.mega_dropdown}>
                <div className={styles.container}>
                  <div className={`${styles.grid1} ${styles.grid}`}>
                    <div className={styles.part1}>
                      <h4>Foods and Vegetable</h4>
                      <ul>
                        <li>
                          <Button>
                            <Link href="/about">Meat & Poultry</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Fresh Vegetables</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Herb & Seasoning</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Cuts & Sprouts</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Exotics Foods and Veggies</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Package Products </Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.part2}>
                      <h4>Breakfast and Diaries</h4>
                      <ul>
                        <li>
                          <Button>
                            <Link href="/about">Meat & Poultry</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Fresh Vegetables</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Herb & Seasoning</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Cuts & Sprouts</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Exotics Foods and Veggies</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Package Products</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.part3}>
                      <h4>Meat and SeaFood</h4>
                      <ul>
                        <li>
                          <Button>
                            <Link href="/about">Meat & Poultry</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Fresh Vegetables</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Herb & Seasoning</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Cuts & Sprouts</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Exotics Foods and Veggies</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href="/about">Package Products</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.grid2} ${styles.grid}`}>
                    <div className={styles.part1}>
                      <div className={styles.information}>
                        <h4>Food and Vegetables</h4>
                        <p>Get 50% Discount</p>
                        <Button className={styles.img_button}>Shop Now</Button>
                      </div>
                      <Image
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                        width={400}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>Blog</li>
            <li className={`${styles.drop_li} ${styles.mega_li}`}>
              Pages
              <KeyboardArrowDown />
              <div
                className={`${styles.page_dropdown} ${quicksand.variable}`}
                style={{ height: "auto" }}
              >
                <ul className={quicksand.variable}>
                  <li>
                    <Button>
                      <Link href="/about">About Us</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Contact</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">My Account</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Login</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Register</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Forgot password</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Reset password</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Purchase Guide</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Privacy Policy</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">Terms of Service</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link href="/about">404 Page</Link>
                    </Button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <Headset />
          <div>
            <span>1900-880</span>
            <p>27/7 support center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

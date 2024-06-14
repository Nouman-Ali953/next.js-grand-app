"use client";
import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScrollState from "@/utils/scroll";
import { AuthContext } from "@/context/AuthContext";
const Navbar = () => {
  const {users} = useContext(AuthContext)
  const isScrolled = useScrollState();
  const pathName = usePathname();
  const isMainPage = pathName === "/";
  return (
    <>
      <div
        className={
          isMainPage
            ? `${styles.container} ${isScrolled ? styles.scrolled : ""}`
            : `${styles.container} ${styles.bacRed} `
        }
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            className={
              isMainPage
                ? `${styles.logo} ${isScrolled ? styles.logos : ""}`
                : ` ${styles.logo} ${styles.logC}`
            }
          >
            nextjs <span>.</span>
          </div>
        </Link>
        <div>
          <Links users={users}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;

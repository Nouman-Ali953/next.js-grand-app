"use client"
import React, { useContext, useState, useEffect } from "react";
import styles from "./carticons.module.scss";
import Image from "next/image";
import cartImage from "@/assets/images/icon-cart.svg";
import compare from "@/assets/images/icon-compare.svg";
import heart from "@/assets/images/icon-heart.svg";
import { quicksand } from "@/app/layout";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Button } from "@mui/material";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "@/firebase";
import { useSelector } from "react-redux";

const auth = getAuth(app);

const CartIcons = () => {
  const { users, setUsers } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state)=>state.cart.items)
  

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUsers(null);
      setIsOpen(false);
      console.log("Sign-out successful");
      localStorage.clear()
      sessionStorage.clear()
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // useEffect to listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is logged in, update state
        setUsers(currentUser);
      } else {
        // User is logged out, set users to null
        setUsers(null);
      }
    });

    // Cleanup function to unsubscribe from listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className={styles["icon-wrapper"]}>
      <div className={styles.box}>
        <Image src={compare} width={20} alt="compare" />
        <span className={styles.badge}>3</span>
        <span className={quicksand.variable}>compare</span>
      </div>
      <div className={styles.box}>
        <Image src={heart} width={20} alt="heart" />
        <span className={styles.badge}>3</span>
        <span className={quicksand.variable}>heart</span>
      </div>
      <div className={styles.box}>
        <Link href="/shop/cart">
          <Image
            src={cartImage}
            width={20}
            alt="cartimage"
            style={{ marginBottom: "-.4rem" }}
          />
        <span className={styles.badge}>{cart?.length}</span>
        <span className={quicksand.variable}>cart</span>
        </Link>
      </div>
      <div className={styles.box}>
        {users ? ( // Check if users exist
          <>
            {users.photoURL ? (
              <Image
                src={users.photoURL}
                alt="User Photo"
                width={60}
                height={40}
                quality={100}
                objectFit="contain"
                className={styles.userImage}
                onClick={() => setIsOpen((prev) => !prev)}
              />
            ) : (
              <Person2OutlinedIcon
                className={styles.userImage}
                onClick={() => setIsOpen((prev) => !prev)}
              />
            )}
            {isOpen && ( // Conditionally render logout button
              <Button onClick={handleSignOut} className={styles.logout}>
                Logout
              </Button>
            )}
          </>
        ) : (
          <Link href="/signin">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartIcons;

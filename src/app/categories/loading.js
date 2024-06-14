import React from "react";
import styles from "@/app/page.module.css";
import load from '@/assets/images/loading.gif'
import Image from "next/image";
export default function loading() {
  return (
    <>
      <div className={styles.main}>
        {/* <div className={styles.loader}></div> */}
        <Image 
          src={load}
          width={70}
          height={70}
        />
      </div>
    </>
  );
}

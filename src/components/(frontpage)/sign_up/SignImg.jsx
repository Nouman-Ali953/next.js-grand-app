import React from "react";
import styles from "./signup.module.scss";
import Image from "next/image";
import {PlayCircle} from '@mui/icons-material';
const SignImg = () => {
  return (
    <>

    <div className={styles.containers}>
      <Image
        src="/bg-signup.webp"
        objectFit="cover"
        layout="fill"
        alt="ok"
        quality={100}
      />
      <div className={styles.text}>
        <h2>
          Suddenly it's all so <span>doable.</span>
        </h2>
        <button>Join Next14</button>
      </div>
    </div>
    <div className={styles.vacent}></div>
    </>
  );
};

export default SignImg;

"use client";
import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Button, TextField } from "@mui/material";
import { app } from "@/firebase";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import Link from "next/link";
import { quicksand } from "@/app/layout";
const auth = getAuth(app);

const EmailAndPasswordIntitial = {
  email: "",
  password: "",
  cpassword: "",
};
const Page = () => {
  const [emailUser, setEmailUser] = useState(EmailAndPasswordIntitial);
  const router = useRouter();

  const AuthPasswordUser = async (e) => {
    setEmailUser({ ...emailUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailUser.email,
        emailUser.password
      );
      setEmailUser(EmailAndPasswordIntitial);
      router.push("/signin");
    } catch (error) {
      console.log("error while signUp", error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <form action={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          className={styles.text}
          value={emailUser.email}
          onChange={(e) => AuthPasswordUser(e)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          value={emailUser.password}
          type="password"
          variant="outlined"
          className={styles.text}
          onChange={(e) => AuthPasswordUser(e)}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          name="cpassword"
          value={emailUser.cpassword}
          type="password"
          variant="outlined"
          className={styles.text}
          onChange={(e) => AuthPasswordUser(e)}
        />
        <Button type="submit">SignUp</Button>
        <Link href="/signin">
          <p className={quicksand.variable}>Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Page;

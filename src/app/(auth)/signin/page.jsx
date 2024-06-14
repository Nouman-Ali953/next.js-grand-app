"use client";
import React, { useContext, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Button, TextField } from "@mui/material";
import { app } from "@/firebase";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const initialEmailAndPassword = {
  email: '',
  password: ''
};

const Page = () => {
  const { setUsers } = useContext(AuthContext);
  const [emailUser, setEmailUser] = useState(initialEmailAndPassword);
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUsers(user); // Update the context with the signed-in user
      const userString = JSON.stringify(user);
      localStorage.setItem("user", userString); // Save user object to local storage
      sessionStorage.setItem("user", userString); 
      console.log("Access Token:", user.accessToken);
      router.push("/shop");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleInputChange = (e) => {
    setEmailUser({ ...emailUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailUser.email, emailUser.password);
      const user = userCredential.user;
      setUsers(user); // Update the context with the signed-in user
      setEmailUser(initialEmailAndPassword);
      localStorage.setItem('user', JSON.stringify(user)); // Save user object to local storage
      router.push('/shop');
    } catch (error) {
      console.error("Error logging in with email and password:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          className={styles.text}
          value={emailUser.email}
          onChange={handleInputChange}
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          className={styles.text}
          value={emailUser.password}
          onChange={handleInputChange}
        />
        <Button type="submit">Login</Button>
      </form>
      <p>OR</p>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  );
};

export default Page;

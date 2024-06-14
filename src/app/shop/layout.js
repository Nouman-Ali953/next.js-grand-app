import Header from "@/components/ecom/header/Header";
import React from "react";
import "./global.css";
import Nav from "@/components/ecom/nav/Nav";
import { AuthContextProvider } from "@/context/AuthContext";

const layout = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Nav />
        {children}
      </AuthContextProvider>
    </>
  );
};

export default layout;

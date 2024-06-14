import React from "react";
import "./global.css";
import BreadCome from "@/components/ecom/breadcome/BreadCome";
import CartComponent from "@/components/ecom/cartComponent/CartComponent";
import Subcribe from "@/components/ecom/subscribe/Subcribe";
const page = () => {
  return (
    <>
      <BreadCome />
      <CartComponent />
      <Subcribe/>
    </>
  );
};

export default page;

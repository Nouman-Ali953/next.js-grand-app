"use client"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyApp = ({ children }) => {
 useEffect(() => {
     AOS.init({
          duration: 800,
          once: true,
        })
  }, [])
  return <>
    {children}
  </>;
}
export default MyApp;

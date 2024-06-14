"use client";

import React from "react";
import Navbar from "./(frontpage)/navbar/Navbar";
import Footer from "./(frontpage)/footer/Footer";
import { usePathname } from "next/navigation";
import Social from "./(samecomp)/social/Social";
import { AuthContextProvider } from "@/context/AuthContext";

const Layout = ({ children }) => {
  const pathName = usePathname();
  const excludedPaths = ["/shop", "/categories"];

  // Function to check if the path starts with any of the excluded paths
  const isExcludedPath = () => {
    for (const excludedPath of excludedPaths) {
      if (pathName.startsWith(excludedPath)) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      {!isExcludedPath() && (
        <>
          <AuthContextProvider>
            <Navbar />
          </AuthContextProvider>
          <Social />
        </>
      )}
      <AuthContextProvider>{children}</AuthContextProvider>
      <Footer />
    </div>
  );
};

export default Layout;

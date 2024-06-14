"use client";
import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext with default value as null
export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log("Current user in context:", users);
  }, [users]); // Log whenever the users state changes

  return (
    <AuthContext.Provider value={{ users, setUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

"use client"

import { AuthContext } from '@/context/AuthContext';
import React from 'react';

const AuthProvider = ({children}) => {
    return (
        <>
        <AuthContext>{children}</AuthContext>
    </>
  )
}

export default AuthProvider
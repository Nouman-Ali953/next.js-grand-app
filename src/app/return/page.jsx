"use client"
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';


export default function Return() {
  

    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          flexDirection:'column'
        }}
      >
        <div style={{padding:'1rem',letterSpacing:'2px'}}>Return from checkout</div>
        <Link href="/shop">
          <Button style={{backgroundColor:'#3BB77E',color:'white',padding:'.7rem 1rem'}}>Go Back to Shopping</Button>
        </Link>
      </div>
    )
  
}
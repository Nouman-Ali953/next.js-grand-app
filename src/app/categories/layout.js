import Header from '@/components/ecom/header/Header'
import React from 'react'
import './global.css'
import Nav from '@/components/ecom/nav/Nav'

const layout = ({children}) => {
  return (
    <>
        <Header/>
        <Nav/>
        {children}
    </>
  )
}

export default layout
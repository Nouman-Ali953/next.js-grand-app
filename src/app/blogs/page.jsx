import dynamic from 'next/dynamic';
import React from 'react'
const SpecialPage = dynamic(() => import("@/app/shop/page"));

const Blogs = () => {
  return (
    <>
    <SpecialPage/>
    <div>Blogs</div>
    </>
  )
}

export default Blogs
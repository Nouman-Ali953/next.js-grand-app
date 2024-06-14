// "use client";
// import Banners from "@/components/ecom/banners/Banners";
// import LongSlider from "@/components/ecom/long_slider/LongSlider";
// import Products from "@/components/ecom/products/Products";
// import Slick from "@/components/ecom/slick/Slick";
// import React, { useContext, useEffect, useState } from "react";
// import styles from "./shop.module.scss";
// import AfterProducts from "@/components/ecom/afterProducts/AfterProducts";
// import Subcribe from "@/components/ecom/subscribe/Subcribe";
// import { DataContextApi } from "@/context/DataContextApi";
// import { quicksand } from "../layout";
// const Shop = () => {
//   const productData = useContext(DataContextApi);
//   const [catArray, setcatArray] = useState();
//   const [activeTabData, setActiveTabData] = useState();
//   const [activeTab, setActiveTab] = useState('dals and pulses');
//   const catArr = [];
//   useEffect(() => {
//     productData &&
//       productData.map((item) => {
//         item.items &&
//           item.items.map((item_) => {
//             catArr.push(item_.cat_name);
//           });
//       });

//     const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
//     setcatArray(list2);
//   }, [catArr]);

//   var arr = [];
//   useEffect(() => {
//     productData &&
//       productData.map((item, index) => {
//         item.items.map((item_, index_) => {
//           if (item_.cat_name === activeTab) {
//             {
//               item_.products &&
//                 item_.products.map((product) => {
//                   arr.push({
//                     ...product,
//                     parentCatName: item.cat_name,
//                     subCatName: item_.cat_name,
//                   });
//                 });

//               }
//             }
//           });
//           setActiveTabData(arr);
//       });
//   }, [activeTab, activeTabData]);

//   const handleTabClick = (cat) => {
//     setActiveTab(cat);
//   };
//   return (
//     <>
//       <Slick />
//       <LongSlider />
//       <Banners />
//       <div className={styles.filters_functionality}>
//         <h2 className={quicksand.variable}>popular products</h2>
//         <ul>
//           {catArray &&
//             catArray.map((cat, index) => {
//               return (
//                 <li
//                   className={quicksand.variable}
//                   onClick={() => handleTabClick(cat)}
//                 >
//                   <a className={`${activeTab === cat ? styles.active : ""}`}>
//                     {cat}
//                   </a>
//                 </li>
//               );
//             })}
//         </ul>
//       </div>
//       <div className={styles.container_product}>
//         {activeTabData &&
//           activeTabData.map((item, index) => {
//             return (
//               <div key={index}>
//                 <Products tag={item.type} item={item} />
//               </div>
//             );
//           })}
//       </div>
//       <AfterProducts />
//       <Subcribe />
//     </>
//   );
// };

// export default Shop;















// const image_default =
  //   "https://www.jiomart.com/images/product/original/491551495/good-life-pure-crystal-sugar-m-5-kg-product-images-o491551495-p491551495-0-202205272019.jpg?im=Resize=(620,620)";
  // const [zoomImage, setZoomImage] = useState(image_default);







  
  // const urls = [
  //   {
  //     id: 0,
  //     url: "https://www.jiomart.com/images/product/original/rv6jh6amd4/nikunj-real-elaichi-tea-1kg-product-images-orv6jh6amd4-p601862757-1-202305270343.png?im=Resize=(620,620)",
  //   },
  //   {
  //     id: 1,
  //     url: "https://www.jiomart.com/images/product/original/490001537/nestle-milkmaid-condensed-milk-380-g-tin-product-images-o490001537-p490001537-0-202211151711.jpg?im=Resize=(620,620)",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.jiomart.com/images/product/original/rvc9zer3my/pears-pure-and-gentle-shower-gel-750-ml-product-images-orvc9zer3my-p605387631-0-202310021216.jpg?im=Resize=(620,620)",
  //   },
  //   {
  //     id: 3,
  //     url: "https://www.jiomart.com/images/product/original/493831379/classic-essential-black-stainless-steel-lunch-box-with-water-bottle-set-of-5-product-images-o493831379-p603773670-0-202308111141.jpg?im=Resize=(620,620)",
  //   },
  //   {
  //     id: 4,
  //     url: "https://www.jiomart.com/images/product/original/rvvwvbkrhp/nutrixia-jethimadh-powder-mulethi-churna-licorice-root-glycyrrhiza-glabra-jeshthamadh-50-gms-product-images-orvvwvbkrhp-p598740047-0-202302241516.jpg?im=Resize=(620,620)",
  //   },
  // ];

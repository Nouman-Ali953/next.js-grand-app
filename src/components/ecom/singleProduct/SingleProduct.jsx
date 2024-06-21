"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./single.module.scss";
import Header from "./Header";
import StarIcon from "@mui/icons-material/Star";
import { quicksand } from "@/app/layout";
import Rating from "@mui/material/Rating";
import { Button, Divider, TextField } from "@mui/material";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import AfterProducts from "../afterProducts/AfterProducts";
import { TextareaAutosize } from "@mui/base";
import { useParams } from "next/navigation";
import { addReview, getAllReviews } from "@/lib/actions";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

const initialReviewValues = {
  username: "",
  email: "",
  website: "",
  rating: "",
  review: "",
};

const SingleProduct = (product) => {
  const [reviewValue, setReviewValue] = useState(initialReviewValues);
  const [activeTab, setActiveTab] = useState(0);
  const [allReviews, setAllReviews] = useState([]);
  const [value, setValue] = React.useState(2);
  const zoomSliderBig = useRef(null);
  const zoomSlider = useRef(null);
  const { users } = useContext(AuthContext);
  const userId = users?.uid;
  const userImage = users?.photoURL;
  console.log(userId);
  
  const fetchReviews = async () => {
    const Reviews = await getAllReviews(productI);
    setAllReviews(Reviews);
  };
  useEffect(() => {
    fetchReviews();
  }, []);
 
  const id = useParams();
  const productI = id.slug;
  const values = 4.5;
  const goto = async (index) => {
    await zoomSliderBig.current.slickGoTo(index);
    await zoomSlider.current.slickGoTo(index);
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    autoplay: false,
  };
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
  };

  const buttons_data = [
    { id: 0, text: "Description" },
    { id: 1, text: "Additional Information" },
    { id: 2, text: "Vendors" },
    { id: 3, text: "Reviews" },
  ];
  const ChangeTab = (data) => {
    setActiveTab(data);
  };

  const ChangeValue = (e) => {
    setReviewValue({
      ...reviewValue,
      [e.target.name]: e.target.value,
      productId: productI,
    });
  };
  const photo = localStorage.getItem("user");
  const handleFormSubmit = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("username", reviewValue.username);
    formData.append("userImage", userImage);
    formData.append("email", reviewValue.email);
    formData.append("website", reviewValue.website);
    formData.append("rating", reviewValue.rating);
    formData.append("review", reviewValue.review);
    formData.append("slug", productI);

    try {
      await addReview(formData);
      await fetchReviews(); // Fetch reviews again after adding a new one
      // Reset form values if needed
      setReviewValue({
        username: "",
        email: "",
        website: "",
        review: "",
        rating: 0,
        userId: "",
      });
      setValue(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const isDisabled = !users;
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.image_section} data-aos="fade-left">
          <div className={styles.wrapper}>
            <Slider {...settings2} className="large" ref={zoomSliderBig}>
              {product.product[0]?.productImages !== undefined &&
                product.product[0]?.productImages.map((data, index) => (
                  <InnerImageZoom
                    src={data}
                    zoomType="hover"
                    zoomScale={1.7}
                    zoomSrc={data}
                    key={index}
                  />
                ))}
            </Slider>
          </div>

          <Slider
            {...settings}
            className={styles.detail_slider}
            ref={zoomSlider}
          >
            {product.product[0]?.productImages ? (
              product.product[0]?.productImages.map((data, index) => (
                <div className={styles.boxes} key={index}>
                  <Image
                    src={data}
                    key={index}
                    objectFit="cover"
                    quality={100}
                    width={150}
                    height={150}
                    alt="here"
                    onClick={() => goto(index)}
                  />
                </div>
              ))
            ) : (
              <p>no images here</p>
            )}
          </Slider>
        </div>
        <div className={styles.detail_section} data-aos="fade-right">
          <div className={`${styles.badge} ${quicksand.variable}`}>
            Sale Off
          </div>
          <h2 className={`${styles.title} ${quicksand.variable}`}>
            {product.product[0]?.productName}
          </h2>
          <div className={`${styles.review_section} ${quicksand.variable}`}>
            <Rating
              readOnly
              name="text-feedback"
              value={values}
              style={{ fontSize: ".9rem" }}
              precision={0.5}
              className={styles.color}
              icon={<StarIcon fontSize="inherit" />}
            />
            <p>(32 reviews)</p>
          </div>
          <div className={`${styles.price_div} ${quicksand.variable}`}>
            <h2>$38</h2>
            <span>
              26% off
              <p>$52</p>
            </span>
          </div>
          <p className={`${styles.description} ${quicksand.variable}`}>
            Introducing our revolutionary smartwatch: sleek design, seamless
            connectivity, and advanced health tracking redefine your daily
            routine. Elevate your workouts with precision tracking and real-time
            coaching, all at your fingertips. Stay effortlessly stylish while
            staying connected like never before.
          </p>
          <div className={`${styles.sizes} ${quicksand.variable}`}>
            Size/Weight:
            <span>50g</span>
            <span>60g</span>
            <span className={styles.active}>80g</span>
            <span>100g</span>
            <span>150g</span>
          </div>
          <div className={`${styles.button_section} ${quicksand.variable}`}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max="100"
              step="1"
              defaultValue={1}
            />
            <Button>
              <ShoppingCartOutlinedIcon />
              Add to cart
            </Button>
            <FavoriteBorderOutlinedIcon />
            <CompareArrowsOutlinedIcon />
          </div>
        </div>
      </div>

      <div className={styles.bottom_detailed} data-aos="fade-up">
        <div
          className={`${styles.bottom_detailed_header} ${quicksand.variable}`}
          data-aos="fade-up"
        >
          {buttons_data?.map((data) => (
            <div
              key={data.id}
              className={`${styles.boxes} ${
                activeTab === data.id ? styles.active : ""
              }`}
              onClick={() => ChangeTab(data.id)}
            >
              {data?.text}
            </div>
          ))}
        </div>
        <div
        
          className={styles.bottom_detailed_data}
          style={
            activeTab === 0
              ? {
                  display: "flex",
                  opacity: 1,
                  transition: "all .8s ease",
                }
              : {
                  display: "none",
                  opacity: 0,
                }
          }
        >
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart. Spluttered narrowly yikes left moth in yikes bowed this
            that grizzly much hello on spoon-fed that alas rethought much
            decently richly and wow against the frequent fluidly at formidable
            acceptably flapped besides and much circa far over the bucolically
            hey precarious goldfinch mastodon goodness gnashed a jellyfish and
            one however because.
            <ul>
              <div className={styles.lsting}>
                <li>Type Of Packing</li>
                <p> Bottle</p>
              </div>
              <div className={styles.lsting}>
                <li>Color</li> <p> Green, Pink, Powder Blue, Purple</p>
              </div>
              <div className={styles.lsting}>
                <li>Quantity Per Case </li> <p>100ml </p>
              </div>
              <div className={styles.lsting}>
                <li>Ethyl Alcohol</li> <p>70%</p>
              </div>
              <div className={styles.lsting}>
                <li>Piece</li>
                <p>In One Carton</p>
              </div>
            </ul>
            <Divider style={{ margin: "1rem" }} />
            Laconic overheard dear woodchuck wow this outrageously taut beaver
            hey hello far meadowlark imitatively egregiously hugged that yikes
            minimally unanimous pouted flirtatiously as beaver beheld above
            forward energetic across this jeepers beneficently cockily less a
            the raucously that magic upheld far so the this where crud then
            below after jeez enchanting drunkenly more much wow callously
            irrespective limpet.
            <h2 className={quicksand.variable}>Packaging & Delivery</h2>
            <Divider style={{ margin: ".3rem 1rem .6rem 1rem" }} />
            Less lion goodness that euphemistically robin expeditiously bluebird
            smugly scratched far while thus cackled sheepishly rigid after due
            one assenting regarding censorious while occasional or this more
            crane went more as this less much amid overhung anathematic because
            much held one exuberantly sheep goodness so where rat wry well
            concomitantly. Scallop or far crud plain remarkably far by thus far
            iguana lewd precociously and and less rattlesnake contrary caustic
            wow this near alas and next and pled the yikes articulate about as
            less cackled dalmatian in much less well jeering for the thanks
            blindly sentimental whimpered less across objectively fanciful
            grimaced wildly some wow and rose jeepers outgrew lugubrious luridly
            irrationally attractively dachshund.
            <h2 className={quicksand.variable}>Suggested Use</h2>
            Refrigeration not necessary. Stir before serving
            <h2 className={quicksand.variable}>Other Ingredients</h2>
            Organic raw pecans, organic raw cashews.
            <br />
            This butter was produced using a LTG (Low Temperature Grinding)
            process
            <br />
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten, dairy or soy
            <h2 className={quicksand.variable}>Warnings</h2>
            Oil separation occurs naturally. May contain pieces of shell.
          </p>
        </div>

        <div
          className={styles.table_tab_details}
          style={
            activeTab === 1
              ? {
                  display: "flex",
                  opacity: 1,
                  transition: ".8s ease",
                }
              : { opacity: 0, display: "none" }
          }
          
        >
          <table
          className={`${styles["spec-table"]} ${quicksand.variable}`}>
            <tbody>
              <tr>
                <td>Stand Up</td>
                <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
              </tr>
              <tr>
                <td>Folded (w/o wheels)</td>
                <td>32.5″L x 18.5″W x 16.5″H</td>
              </tr>
              <tr>
                <td>Folded (w/ wheels)</td>
                <td>32.5″L x 24″W x 18.5″H</td>
              </tr>
              <tr>
                <td>Door Pass Through</td>
                <td>24″</td>
              </tr>
              <tr>
                <td>Frame</td>
                <td>Aluminum</td>
              </tr>
              <tr>
                <td>Weight (w/o wheels)</td>
                <td>20 LBS</td>
              </tr>
              <tr>
                <td>Weight Capacity</td>
                <td>60 LBS</td>
              </tr>
              <tr>
                <td>Width</td>
                <td>24″</td>
              </tr>
              <tr>
                <td>Handle height (ground to handle)</td>
                <td>37-45″</td>
              </tr>
              <tr>
                <td>Wheels</td>
                <td>12″ air / wide track slick tread</td>
              </tr>
              <tr>
                <td>Seat back height</td>
                <td>21.5″</td>
              </tr>
              <tr>
                <td>Head room (inside canopy)</td>
                <td>25″</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Black, Blue, Red, White</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>M, S</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
         
          style={
            activeTab === 2
              ? {
                  display: "flex",
                  opacity: 1,
                  transition: "all .8s ease",
                }
              : {
                  display: "none",
                  opacity: 0,
                }
          }
          className={`${styles.vendors_data} ${quicksand.variable}`}
        >
          <div style={{ margin: "1rem 0px" }}>
            <div className={styles.rev_con} >
              <Image
                src="https://nest-frontend-v6.netlify.app/assets/imgs/vendor/vendor-18.svg"
                width={60}
                height={60}
              />
              <div>
                <h6>Noodles Co.</h6>
                <div
                  className={` ${quicksand.variable}`}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Rating
                    name="text-feedback"
                    value={values}
                    style={{ fontSize: ".9rem" }}
                    readOnly
                    precision={0.5}
                    className={styles.color}
                    icon={<StarIcon fontSize="inherit" />}
                  />
                  <p>(32 reviews)</p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <h6>Address</h6>
              <p>
                5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <h6>Contact Seller</h6>
              <p>(+91) - 540-025-553</p>
            </div>
          </div>
          <p>
            Noodles & Company is an American fast-casual restaurant that offers
            international and American noodle dishes and pasta in addition to
            soups and salads. Noodles & Company was founded in 1995 by Aaron
            Kennedy and is headquartered in Broomfield, Colorado. The company
            went public in 2013 and recorded a $457 million revenue in 2017.In
            late 2018, there were 460 Noodles & Company locations across 29
            states and Washington, D.C.
          </p>
        </div>
        <div
          className={styles.reviews_data}
          style={
            activeTab === 3
              ? {
                  display: "flex",
                  opacity: 1,
                  transition: "opacity .8s ease",
                }
              : {
                  display: "none",
                  opacity: 0,
                }
          }
          
        >
          {allReviews?.length > 0 ? (
            allReviews?.map((data) => (
              <div className={`${styles.box_container} ${quicksand.variable}`}>
                <Image
                  src={
                    data.userImage != "undefined" && data.userImage != "null"
                      ? data.userImage
                      : "https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png"
                  }
                  width={80}
                  height={80}
                />
                <div className={styles.data}>
                  <div className={styles.date}>
                    <p>
                      {new Date(data.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                    <Rating
                      name="text-feedback"
                      value={data.rating}
                      style={{ fontSize: ".9rem" }}
                      readOnly
                      precision={0.5}
                      className={styles.color}
                      icon={<StarIcon fontSize="inherit" />}
                      emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                  </div>
                  <p style={{ paddingLeft: ".17rem" }}>{data.review}</p>
                </div>
              </div>
            ))
          ) : (
            <p>no review for this product</p>
          )}

          <h4>Add a review</h4>
          <div className={`${styles.reviews_form} ${quicksand.variable}`}>
            <form action={handleFormSubmit}>
              <input type="hidden" name="userId" value={userId} />
              <input type="hidden" name="slug" value={productI} />
              <input type="hidden" name="userImage" value={userImage} />

              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                name="username"
                className={`${styles.text} ${quicksand.variable}`}
                onChange={(e) => ChangeValue(e)}
                value={reviewValue.username}
                disabled={isDisabled}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                className={`${styles.text} ${quicksand.variable}`}
                onChange={(e) => ChangeValue(e)}
                value={reviewValue.email}
                disabled={isDisabled}
              />
              <TextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                name="website"
                className={`${styles.text} ${quicksand.variable}`}
                onChange={(e) => ChangeValue(e)}
                value={reviewValue.website}
                disabled={isDisabled}
              />
              <Rating
                // name="simple-controlled"
                name="rating"
                value={value}
                disabled={isDisabled}
                onChange={(event, newValue) => {
                  ChangeValue(event);
                  setValue(newValue);
                }}
                style={{ marginLeft: "4.7rem" }}
              />
              <TextareaAutosize
                disabled={isDisabled}
                aria-label="empty textarea"
                onChange={(e) => ChangeValue(e)}
                className={`${styles.text_area} ${quicksand.variable}`}
                placeholder="Enter Review Here"
                minRows={9}
                maxRows={10}
                name="review"
                value={reviewValue.review}
              />
              <Button onClick={fetchReviews} type="submit">
                Submit
              </Button>
              {isDisabled ? (
                <Link href="/signin">
                  <p style={{ letterSpacing: "1px", color: "gray" }}>
                    You must first logged in to write a review.
                  </p>
                </Link>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
      <AfterProducts retaled="yes" />
    </>
  );
};

export default SingleProduct;

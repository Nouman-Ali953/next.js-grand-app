"use server";

import { revalidatePath } from "next/cache";
import connect from "./connect";
import { Review } from "./models";
export const addReview = async (formData) => {
  connect();
  const { userId, username, userImage, email, website, rating, review, slug } =
    Object.fromEntries(formData);
  console.log(slug);
  console.log(rating);
  try {
    const newReview = new Review({
      userId,
      userImage,
      slug,
      username,
      email,
      website,
      review,
      rating,
    });
    await newReview.save();
    console.log("saved to db");
    revalidatePath(`/shop/details/${slug}`);
  } catch (error) {
    console.log("error in adding review", error);
    throw new Error("error in review from fend", error);
  }
};

export const getAllReviews = async (slug) => {
  connect();

  try {
    // const reviews = await Review.find();
    // return reviews;

    const reviews = await Review.find({slug});
    // Transform the MongoDB documents to plain objects
    const plainReviews = reviews.map((review) => ({
      id: review._id.toString(),
      username: review.username,
      userImage: review.userImage,
      email: review.email,
      website: review.website,
      review: review.review,
      rating: review.rating,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
    }));
    return plainReviews;
  } catch (error) {
    console.log("error in fetching reviews", error);
    throw new Error("error in fetching reviews");
  }
};

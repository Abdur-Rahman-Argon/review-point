import React from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 2,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 3,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 4,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 5,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 6,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 7,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 8,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
    {
      id: 9,
      name: "meftahol",
      ratings: 4.5,
      reviews: "this product is owesome",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl ">Customer Review</h2>
      <div className="md:grid grid-cols-3">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

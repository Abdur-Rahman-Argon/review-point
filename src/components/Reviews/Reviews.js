import React from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Shakib",
      ratings: 4.8,
      reviews: "this product is owesome, I am very happy got this Product",
    },
    {
      id: 2,
      name: "Mahedi",
      ratings: 4.5,
      reviews:
        "It is beautiful product, my useing Experience is better with this product",
    },
    {
      id: 3,
      name: "Milon",
      ratings: 4.3,
      reviews: "this Monitor was my Favorite. it was a excelent product ",
    },
    {
      id: 4,
      name: "Meftahol",
      ratings: 4.4,
      reviews:
        "Loving it was awsome. thanks all team send me a excelent product",
    },
    {
      id: 5,
      name: "Shohel",
      ratings: 4.7,
      reviews: "this product is owesome, I love all for it",
    },
    {
      id: 6,
      name: "Belel",
      ratings: 4.8,
      reviews: "it was  amazing. It is fecher canot emazine",
    },
    {
      id: 7,
      name: "Rafiq",
      ratings: 4.0,
      reviews: " loving it, i always with it. if you got it please order",
    },
    {
      id: 8,
      name: "Salman",
      ratings: 4.5,
      reviews:
        "my user expraince is better with it, so if you got it please contact",
    },
    {
      id: 9,
      name: "Sharok",
      ratings: 5.0,
      reviews: "this product is nice, Now I very happy got it",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-semibold p-2 m-5">Customer Review:</h2>
      <div className="md:grid grid-cols-3">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

import React, { useEffect, useState } from "react";
import useReviews from "../../Hooks/useReview/useReview";
import Review from "../Review/Review";

const HomeReviews = () => {
  const [reviews, setReviews] = useReviews();
  const review = reviews.slice(0, 3);

  return (
    <div>
      <h2 className="text-3xl font-bold p-2 m-5">Customer Review:</h2>
      <div className="md:grid grid-cols-3">
        {review.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default HomeReviews;

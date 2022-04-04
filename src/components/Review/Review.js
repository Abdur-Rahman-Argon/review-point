import React from "react";

const Review = (props) => {
  const { name, ratings, reviews } = props.review;
  return (
    <div className="border-2 rounded-lg m-4 p-4">
      <h2 className="text-2xl">Name:{name}</h2>
      <h3 className="text-2xl">Ratings:{ratings}</h3>
      <h5>Review:{reviews}</h5>
    </div>
  );
};

export default Review;

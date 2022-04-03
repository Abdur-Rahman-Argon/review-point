import React from "react";

const Review = (props) => {
  const { name, ratings, reviews } = props.review;
  return (
    <div className="Card">
      <h2>Name:{name}</h2>
      <h3>Ratings:{ratings}</h3>
      <h5>Review:{reviews}</h5>
    </div>
  );
};

export default Review;

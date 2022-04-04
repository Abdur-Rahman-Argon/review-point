import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2">
        <div className="m-10 px-20 pt-10">
          <h1 className="text-4xl mb-4 font-bold">Your Next Phone</h1>
          <h1 className="text-4xl mb-4 font-semibold">Your Best Phone</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptas placeat quo tempore itaque, reiciendis labore fugit
            veritatis praesentium natus rem animi neque minus. Temporibus
            blanditiis necessitatibus a deserunt voluptas?
          </p>
          <button className="rounded-lg border-2 px-5 py-2 m-5 bg-emerald-500 ">
            Live Demo ->
          </button>
        </div>
        <div>
          <h4>Show picture</h4>
        </div>
      </div>
      <div>
        <Reviews></Reviews>
        <Link
          className="rounded-lg border-2 px-5 py-2 m-10 bg-emerald-500 "
          to="/reviews"
        >
          See all review
        </Link>
      </div>
    </div>
  );
};

export default Home;

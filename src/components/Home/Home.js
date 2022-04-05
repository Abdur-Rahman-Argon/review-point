import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import Tv from "../../image/led-tv.png";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 p-16">
        <div className="m-10 px-20 pt-10">
          <h1 className="text-4xl mb-4 font-bold">Your Best LED Monitor</h1>
          <h1 className="text-4xl mb-4 font-semibold">Select Now</h1>
          <p>
            If Your buy a LED monitor, Now select this Monitor. this monitor has
            a beautiful color grading, 4k video rasulation and Life time
            replacement Geranty. So,You Directly select this Monuitor for your
            future Life. If Needed please cheack Our Customer Review.
          </p>
          <button className="rounded-lg flex border-2 px-5 py-2 m-5 bg-emerald-500 ">
            <span> Live Demo </span>
            <ArrowRightIcon className="w-6"></ArrowRightIcon>
          </button>
        </div>
        <div className="p-10">
          <img className="w-100" src={Tv} alt="" />
        </div>
      </div>
      <div>
        <Reviews></Reviews>
        <div className="m-1">
          <Link
            className="rounded-lg border-2 w-48 px-5 py-2  bg-emerald-500 content-center"
            to="/reviews"
          >
            See all review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

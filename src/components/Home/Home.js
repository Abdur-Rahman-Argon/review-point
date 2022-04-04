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
          <h1 className="text-4xl mb-4 font-bold">Your Next Phone</h1>
          <h1 className="text-4xl mb-4 font-semibold">Your Best Phone</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptas placeat quo tempore itaque, reiciendis labore fugit
            veritatis praesentium natus rem animi neque minus. Temporibus
            blanditiis necessitatibus a deserunt voluptas?
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
        <div className="m-10">
          <Link
            className="rounded-lg border-2 flex w-48 px-5 py-2  bg-emerald-500 "
            to="/reviews"
          >
            <span> See all review </span>
            <ArrowRightIcon className="w-6"></ArrowRightIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

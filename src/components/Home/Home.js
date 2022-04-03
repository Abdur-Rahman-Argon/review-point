import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Your Next Phone</h1>
          <h1>Your Best Phone</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptas placeat quo tempore itaque, reiciendis labore fugit
            veritatis praesentium natus rem animi neque minus. Temporibus
            blanditiis necessitatibus a deserunt voluptas?
          </p>
          <button>Live Demo</button>
        </div>
        <div>
          <h4>Show picture</h4>
        </div>
      </div>
      <div>
        <Reviews></Reviews>
        <Link to="/reviews">See all review</Link>
      </div>
    </div>
  );
};

export default Home;

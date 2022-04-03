import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/reviews">REVIEWS</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/blogs">BLOGS</Link>
      </nav>
    </div>
  );
};

export default Headers;

import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Headers = () => {
  return (
    <div>
      <nav className="md:flex mx-auto md:text-center w-full bg-indigo-300 py-5">
        <CustomLink className="mx-16 text-2xl" to="/">
          HOME
        </CustomLink>
        <CustomLink className="mx-16 text-2xl" to="/reviews">
          REVIEWS
        </CustomLink>
        <CustomLink className="mx-16 text-2xl" to="/dashboard">
          DASHBOARD
        </CustomLink>
        <CustomLink className="mx-16 text-2xl" to="/blogs">
          BLOGS
        </CustomLink>
      </nav>
    </div>
  );
};

export default Headers;

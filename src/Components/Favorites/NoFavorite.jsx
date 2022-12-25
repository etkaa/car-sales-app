import React from "react";
import { Link } from "react-router-dom";

const NoFavorite = () => {
  return (
    <div
      className="flex flex-col justify-around items-center min-h-[10rem] max-w-[30rem] bg-slate-50 
  rounded-xl shadow-md text-center px-4 py-4"
    >
      <h2 className="font-medium text-2xl">You have no favorite listing.</h2>
      <Link
        to={"/home"}
        className="font-medium text-xl transition duration-200
       text-white bg-purple-500 hover:bg-pink-500 py-2 rounded-xl px-3
       max-w-[15rem]"
      >
        Browse Listings
      </Link>
    </div>
  );
};

export default NoFavorite;

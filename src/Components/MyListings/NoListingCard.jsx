import React from "react";
import { Link } from "react-router-dom";
import { CreateIcon } from "../UI/Icons";

const NoListingCard = () => {
  return (
    <div
      className="flex flex-col justify-center space-y-6 min-h-[12rem] max-h-[12rem] min-w-[22rem] 
      max-w-[30rem] bg-slate-50 rounded-xl shadow-md py-1 px-1 text-center items-center"
    >
      <h1 className="text-2xl">You have no active listings.</h1>
      <Link
        to={`/listing/add`}
        className="flex place-items-center bg-purple-500 px-4 py-2 rounded-xl text-slate-50"
      >
        <CreateIcon />
        <span className="text-xl">Create a listing</span>
      </Link>
    </div>
  );
};

export default NoListingCard;

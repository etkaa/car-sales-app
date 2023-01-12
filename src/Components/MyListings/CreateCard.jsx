import React from "react";
import { Link } from "react-router-dom";
import { CreateIcon } from "../UI/Icons";

const CreateCard = () => {
  return (
    <div
      className="flex min-h-[12rem] max-h-[12rem] min-w-[22rem] max-w-[30rem] bg-slate-50 
            rounded-xl shadow-md py-1 px-1 items-center text-center"
    >
      <div className="flex flex-col justify-center space-y-4 mx-auto text-center items-center">
        <h1 className="text-2xl bg-slate-100 font-thin px-4 py-2 rounded-xl">Want to add another?</h1>
        <Link
          to="/listing/add"
          className="flex items-center hover:bg-purple-800 bg-purple-500 
          px-4 py-2 max-w-[11rem] text-lg text-slate-50 font-medium rounded-xl
          transition duration-150"
        >
          <CreateIcon />
          <h1>Create Listing</h1>
        </Link>
      </div>
    </div>
  );
};

export default CreateCard;

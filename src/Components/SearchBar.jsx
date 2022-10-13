import React, { Fragment } from "react";

const SearchBar = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex-col w-screen justify-between items-center text-center">
          <div className="flex-col space-y-2 text-center md:text-left w-3/4 max-w-xl mx-auto mt-10">
            <h2 className="text-4xl text-white font-medium">Love it, buy it</h2>
            <h2 className="text-4xl text-white font-bold">Now!</h2>
          </div>
          <input
            className="outline-none shadow-lg w-3/4 max-w-xl text-slate-900 px-5 py-5 
            outline-1 h-10 mx-auto mt-5 mb-5 rounded bg-slate-200"
            type="text"
            placeholder="Search your next best car"
          ></input>
          <h2 className="text-white text-md">OR</h2>
          <button className="flex items-center text-lg py-2 px-3 mx-auto mt-5 mb-10 bg-slate-200 shadow-md rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            Advanced Search
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;

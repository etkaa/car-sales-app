import React, { Fragment, useState } from "react";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import { AdvancedSearchIcon, CloseSearchIcon } from "../UI/Icons";

const SearchBar = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const toggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

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
          <button
            onClick={toggleAdvanced}
            className={`flex items-center text-lg py-2 px-4 mx-auto mt-5 mb-10 hover:bg-gray-300 shadow-md rounded-xl ${
              isAdvancedOpen
                ? "bg-blue-400 text-white font-semibold"
                : "bg-slate-200"
            }`}
          >
            {!isAdvancedOpen ? <AdvancedSearchIcon /> : <CloseSearchIcon />}
            Advanced Search
          </button>
          <div className={`block mx-auto my-4 ${!isAdvancedOpen && "hidden"}`}>
            <AdvancedSearch />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;

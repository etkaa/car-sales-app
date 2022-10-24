import React, { useState } from "react";
import { allMakesModels } from "./data";

const defaultSearchFormValues = {
  year: "",
  make: "",
  model: "",
  trim: null,
  minMile: "",
  maxMile: "",
  minPrice: "",
  maxPrice: "",
};

const AdvancedSearch = () => {
  const [searchFormValues, setSearchFormValues] = useState(
    defaultSearchFormValues
  );
  const [isYearSelected, setIsYearSelected] = useState(false);
  const [isMakeSelected, setIsMakeSelected] = useState(false);
  const [isModelSelected, setIsModelSelected] = useState(false);
  const [chosenMake, setChosenMake] = useState(null);

  const { year, make, model, minMile, maxMile, minPrice, maxPrice } =
    searchFormValues;

  const currentYear = new Date().getFullYear();
  const allYears = {
    name: "year",
    firstOption: "Select Year",
    values: [],
  };
  for (var i = currentYear + 1; i >= 1990; i--) {
    allYears.values.push(i.toString());
  }

  // allMakesModels.map((el) => {
  //   console.log(el.make);
  // });

  // const chosenMake = allMakesModels.find((el) => el.make === "Hyundai");
  // console.log(chosenMake.models);

  //get models of that make
  //get trims of that model

  // const allTrims = {
  //   name: "Select Trim",
  //   values: [],
  // };

  //

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "year":
        setIsYearSelected(true);
        break;
      case "make":
        setChosenMake(value);
        setIsMakeSelected(true);
        break;
      case "model":
        setIsModelSelected(true);
        break;
      default:
        break;
    }

    setSearchFormValues({ ...searchFormValues, [name]: value });
  };

  const submitHandler = () => {
    console.log(searchFormValues);
  };

  const clearHandler = () => {
    setSearchFormValues(defaultSearchFormValues);
    setIsYearSelected(false);
    setIsMakeSelected(false);
    setIsModelSelected(false);
  };

  return (
    <div>
      <form className="flex-col space-y-4 my-8">
        <div className="">
          <select
            name="year"
            value={year}
            onChange={handleChange}
            className="bg-slate-100 shadow-xl 
        outline-none w-8/12 max-w-md rounded-md
        px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">{"Select Year"}</option>
            {allYears.values.map((option) => {
              return (
                <option key={option} className="py-1 hover:bg-slate-400">
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`${!isYearSelected ? "hidden" : ""}`}>
          <select
            name="make"
            value={make}
            onChange={handleChange}
            className="bg-slate-100 shadow-xl 
        outline-none w-8/12 max-w-md rounded-md
        px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">{"Select Make"}</option>
            {allMakesModels.map((el) => {
              return (
                <option key={el.make} className="py-1 hover:bg-slate-400">
                  {el.make}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`${!isMakeSelected ? "hidden" : ""}`}>
          <select
            name="model"
            value={model}
            onChange={handleChange}
            className="bg-slate-100 shadow-xl 
        outline-none w-8/12 max-w-md rounded-md
        px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">
              {"Select Model"}
            </option>

            {isMakeSelected &&
              chosenMake !== "Select Make" &&
              allMakesModels
                .find((el) => el.make === chosenMake)
                .models.map((option) => {
                  return (
                    <option key={option} className="py-1 hover:bg-slate-400">
                      {option}
                    </option>
                  );
                })}
          </select>
        </div>
        <div
          className={`flex justify-center mx-auto 
          outline-none w-8/12 max-w-md rounded-md
          space-x-4 ${!isModelSelected ? "hidden" : ""}`}
        >
          <input
            type="number"
            name="minMile"
            value={minMile}
            onChange={handleChange}
            placeholder="Min Miles"
            className="bg-slate-100 shadow-xl 
        outline-none w-6/12 max-w-md rounded-md px-3 py-2 appearance-none"
          />
          <input
            type="number"
            name="maxMile"
            value={maxMile}
            onChange={handleChange}
            placeholder="Max Miles"
            className="bg-slate-100 shadow-xl 
        outline-none w-6/12 max-w-md rounded-md px-3 py-2 appearance-none"
          />
        </div>
        <div
          className={`flex justify-center mx-auto 
          outline-none w-8/12 max-w-md rounded-md
          space-x-4 ${!isModelSelected ? "hidden" : ""}`}
        >
          <input
            type="number"
            name="minPrice"
            value={minPrice}
            onChange={handleChange}
            placeholder="Min Price ($)"
            className="bg-slate-100 shadow-xl 
        outline-none w-6/12 max-w-md rounded-md px-3 py-2 appearance-none"
          />
          <input
            type="number"
            name="maxPrice"
            value={maxPrice}
            onChange={handleChange}
            placeholder="Max Price ($)"
            className="bg-slate-100 shadow-xl 
        outline-none w-6/12 max-w-md rounded-md px-3 py-2 appearance-none"
          />
        </div>
        <div
          className={`flex items-center justify-between mx-auto 
          outline-none w-9/12 max-w-md rounded-md
          ${!isModelSelected ? "" : ""}`}
        >
          <button
            type="button"
            onClick={submitHandler}
            className={`flex items-center text-white text-lg py-2 px-5 mx-auto mt-5 mb-5 bg-blue-400 font-semibold hover:bg-gray-300 shadow-md rounded-xl ${
              !isModelSelected ? "hidden" : ""
            }`}
          >
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Search
          </button>
          <button
            type="button"
            onClick={clearHandler}
            className={`flex items-center text-white text-lg py-2 px-6 mx-auto mt-5 mb-5 bg-purple-500 font-semibold hover:bg-gray-300 shadow-md rounded-xl ${
              !isModelSelected ? "hidden" : ""
            }`}
          >
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
                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
              />
            </svg>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearch;

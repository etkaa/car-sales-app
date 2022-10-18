import React from "react";
import DropdownMenu from "./SearchTerm";

const AdvancedSearch = () => {
  const currentYear = new Date().getFullYear();
  const allYears = {
    name: "year",
    firstOption: "Select Year",
    values: [],
  };
  for (var i = currentYear + 1; i >= 1990; i--) {
    allYears.values.push(i.toString());
  }

  const allMakes = {
    name: "make",
    firstOption: "Select Make",
    values: ["Audi", "BMW", "Mercedes", "Tesla"],
  };

  //get models of that make

  const allModels = {
    name: "model",
    firstOption: "Select Model",
    values: [
      "A4",
      "A5",
      "A6",
      "C300",
      "S400",
      "E450",
      "330i xDrive",
      "M340i xDrive",
      "X5 M40i",
    ],
  };

  //get trims of that model

  // const allTrims = {
  //   name: "Select Trim",
  //   values: [],
  // };

  //

  return (
    <div>
      <form className="flex-col space-y-4 my-8">
        <DropdownMenu term={allYears} />
        <DropdownMenu term={allMakes} />
        <DropdownMenu term={allModels} />
      </form>
    </div>
  );
};

export default AdvancedSearch;

// <div className="">
// <select
//   id="year"
//   className="bg-slate-100 shadow-xl outline-none w-7/12 max-w-md rounded-md px-3 py-2 appearance-none"
// >
//   <option className="py-1 hover:bg-slate-400">Year</option>
//   {/* Map an array of all years */}
//   <option className="py-1 hover:bg-slate-400">2023</option>
//   <option className="py-1 hover:bg-slate-400">2022</option>
//   <option className="py-1 hover:bg-slate-400">2021</option>
//   <option className="py-1 hover:bg-slate-400">2020</option>
// </select>
// </div>

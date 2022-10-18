import React, { useState } from "react";

const defaultSearchFormValues = {
  year: null,
  make: null,
  model: null,
  trim: null,
  minMile: null,
  maxMile: null,
  minPrice: null,
  maxPrice: null,
};

const DropdownMenu = ({ term }) => {
  const [searchFormValues, setSearchFormValues] = useState(
    defaultSearchFormValues
  );

  //   const { year, make, model, trim, minMile, maxMile, minPrice, maxPrice } =
  //     searchFormValues;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSearchFormValues({ ...searchFormValues, [name]: value });
  };

  return (
    <div className="">
      <select
        name={`${term.name}`}
        value={term.name}
        onChange={handleChange}
        className="bg-slate-100 shadow-xl 
        outline-none w-7/12 max-w-md rounded-md
        px-3 py-2 appearance-none"
      >
        <option className="py-1 hover:bg-slate-400">{term.firstOption}</option>
        {term.values.map((option) => {
          return (
            <option key={option} className="py-1 hover:bg-slate-400">
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownMenu;

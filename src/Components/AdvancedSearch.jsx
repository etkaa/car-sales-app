import React from "react";

const AdvancedSearch = () => {
  return (
    <div>
      <form className="flex-col space-y-4 my-8">
        <div className="">
          <select
            id="year"
            className="bg-slate-100 shadow-xl outline-none w-7/12 max-w-md rounded-md px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">Year</option>
            {/* Map an array of all years */}
            <option className="py-1 hover:bg-slate-400">2023</option>
            <option className="py-1 hover:bg-slate-400">2022</option>
            <option className="py-1 hover:bg-slate-400">2021</option>
            <option className="py-1 hover:bg-slate-400">2020</option>
          </select>
        </div>
        <div className="">
          <select
            id="make"
            className="bg-slate-100 shadow-xl outline-none w-7/12 max-w-md rounded-md px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">Make</option>
            {/* Map an array of all car makes */}
            <option className="py-1 hover:bg-slate-400">Audi</option>
            <option className="py-1 hover:bg-slate-400">BMW</option>
            <option className="py-1 hover:bg-slate-400">Mercedes</option>
            <option className="py-1 hover:bg-slate-400">Tesla</option>
          </select>
        </div>
        <div className="">
          <select
            id="Model"
            className="bg-slate-100 shadow-xl outline-none w-7/12 max-w-md rounded-md px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">Model</option>
            {/* Map the model names for the make */}
            <option className="py-1 hover:bg-slate-400">2023</option>
            <option className="py-1 hover:bg-slate-400">2022</option>
            <option className="py-1 hover:bg-slate-400">2021</option>
            <option className="py-1 hover:bg-slate-400">2020</option>
          </select>
        </div>
        <div className="">
          <select
            id="trim"
            className="bg-slate-100 shadow-xl outline-none w-7/12 max-w-md rounded-md px-3 py-2 appearance-none"
          >
            <option className="py-1 hover:bg-slate-400">Trim</option>
            {/* Map the trim names for the model */}
            <option className="py-1 hover:bg-slate-400">2023</option>
            <option className="py-1 hover:bg-slate-400">2022</option>
            <option className="py-1 hover:bg-slate-400">2021</option>
            <option className="py-1 hover:bg-slate-400">2020</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearch;

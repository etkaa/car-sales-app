import React, { useState, Fragment } from "react";
import { LeftPointArrow, RightPointArrow } from "../UI/Icons";

const DataForm = ({ handleSubmit }) => {
  const style =
    "px-2 py-2 outline-none w-[90%] mx-auto my-auto rounded-xl text-center bg-slate-200 placeholder:text-slate-400";

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <form
      className="items-center text-center w-[35%] min-h-[28rem] h-[28rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-between max-w-[25rem] xl:max-w-[40rem] min-h-[90%] mx-auto py-4">
        {pageNumber === 1 && (
          <Fragment>
            <input
              className={style}
              type="text"
              name="condition"
              placeholder="New or Used"
              required
            />
            <input
              className={style}
              type="number"
              name="year"
              min={0}
              placeholder="Year"
              required
            />
            <input
              className={style}
              type="text"
              name="make"
              placeholder="Make"
              required
            />
            <input
              className={style}
              type="text"
              name="model"
              placeholder="Model"
              required
            />
            <input
              className={style}
              type="text"
              name="trim"
              placeholder="Trim"
              required
            />
            <input
              className={style}
              type="number"
              name="mileage"
              placeholder="Mileage"
              required
            />
          </Fragment>
        )}
        {pageNumber === 2 && (
          <Fragment>
            <input
              className={style}
              type="text"
              name="extColor"
              placeholder="Exterior Color"
              required
            />
            <input
              className={style}
              type="text"
              name="intColor"
              placeholder="Interior Color"
              required
            />
            <input
              className={style}
              type="text"
              name="engineCapacity"
              placeholder="Engine Capacity"
              required
            />
            <input
              className={style}
              type="number"
              name="cyclinders"
              placeholder="Cyclinders"
              required
            />
            <input
              className={style}
              type="number"
              name="horsepower"
              placeholder="Horsepower"
              required
            />
            <input
              className={style}
              type="number"
              name="torque"
              placeholder="Torque"
              required
            />
          </Fragment>
        )}
        {pageNumber === 3 && (
          <Fragment>
            <input
              className={style}
              type="transmission"
              name="text"
              placeholder="Transmission"
              required
            />
            <input
              className={style}
              type="number"
              name="price"
              placeholder="Price"
              required
            />
            <input
              className={style}
              type="text"
              name="city"
              placeholder="City"
              required
            />
            <input
              className={style}
              type="text"
              name="state"
              placeholder="State"
              required
            />
            <input
              className={style}
              type="number"
              name="zip"
              placeholder="Zip Code"
              required
            />
          </Fragment>
        )}
      </div>
      <div className="flex min-h-[10%] items-center">
        {pageNumber > 1 && (
          <button
            type="button"
            className="flex space-x-2 bg-gray-200 px-3 py-1 text-blue-600 mx-auto my-auto rounded-xl"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            <LeftPointArrow />
            Back
          </button>
        )}
        {pageNumber < 3 && (
          <button
            type="button"
            className="flex space-x-2 bg-gray-200 px-3 py-1 text-blue-600 mx-auto my-auto rounded-xl"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
            <RightPointArrow />
          </button>
        )}
        {pageNumber === 3 && (
          <button
            type="submit"
            className="text-md mx-auto px-5 py-1 bg-blue-500 text-slate-100 rounded-2xl 
          hover:bg-yellow-500 hover:text-slate-600 hover:scale-110 tranition duration-150 "
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default DataForm;

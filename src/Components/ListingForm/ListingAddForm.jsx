import React from "react";

const ListingForm = () => {
  const style =
    "px-2 py-2 w-[90%] mx-auto my-auto rounded-xl text-center bg-slate-200 placeholder:text-slate-400";

  const handleSubmit = (e) => {
    e.preventDefault();
    //api call addListing
  };

  return (
    <div className="flex flex-col space-y-5 my-6 w-[60rem] py-2">
      <h1 className="text-2xl text-center">Create a Listing</h1>
      <form className="items-center text-center" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-y-4 max-w-[25rem] mx-auto">
          <input
            className={style}
            type="text"
            name="condition"
            placeholder="New or Used"
          />
          <input
            className={style}
            type="number"
            name="year"
            min="0"
            placeholder="Year"
          />

          <input className={style} type="text" name="make" placeholder="Make" />
          <input
            className={style}
            type="text"
            name="model"
            placeholder="Model"
          />

          <input className={style} type="text" name="trim" placeholder="Trim" />
          <input
            className={style}
            type="number"
            name="mileage"
            placeholder="Mileage"
          />

          <input
            className={style}
            type="text"
            name="text"
            placeholder="Engine Capacity"
          />
          <input
            className={style}
            type="number"
            name="cyclinders"
            placeholder="Cyclinders"
          />
          <input
            className={style}
            type="number"
            name="horsepower"
            placeholder="Horsepower"
          />
          <input
            className={style}
            type="number"
            name="torque"
            placeholder="Torque"
          />
          <input
            className={style}
            type="number"
            name="mileage"
            placeholder="Mileage"
          />
          <input
            className={style}
            type="number"
            name="price"
            placeholder="Price"
          />
          <input
            className={style}
            type="text"
            name="extColor"
            placeholder="Exterior Color"
          />
          <input
            className={style}
            type="text"
            name="intColor"
            placeholder="Interior Color"
          />
          <input className={style} type="text" name="city" placeholder="City" />
          <input
            className={style}
            type="text"
            name="state"
            placeholder="State"
          />
          <input
            className={style}
            type="number"
            name="zip"
            placeholder="Zip Code"
          />
          <input
            className={style}
            type="text"
            name="picture"
            placeholder="Picture Link"
          />
        </div>
        <button
          type="submit"
          className="text-lg mx-auto px-4 py-2 my-4 bg-purple-600 text-slate-100 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListingForm;

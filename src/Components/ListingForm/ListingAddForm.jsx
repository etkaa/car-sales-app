import React, { useState, Fragment } from "react";
// import { UploadIcon } from "../UI/Icons";
import ImageUploadTest from "./ImageUploadTest";

const ListingForm = () => {
  const DUMMY_IMAGES = [
    {
      id: 1,
      url: "https://source.unsplash.com/random/?car/001",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/random/?car/010",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/random/?car/100",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/random/?car/110",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/random/?car/111",
    },
  ];

  const style =
    "px-2 py-2 outline-none w-[90%] mx-auto my-auto rounded-xl text-center bg-slate-200 placeholder:text-slate-400";

  const handleSubmit = async (e) => {
    e.preventDefault();
    //do something so upload photos triggered from image upload component
  };

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="flex flex-col space-y-5 my-auto min-w-[50rem] w-[50rem] py-2">
      <h1 className="text-2xl text-center">Create a Listing</h1>
      <div name="inner container" className="flex">
        <div className="w-[65%] flex flex-col border-2 border-slate-200 rounded-xl max-h-[28rem]">
          <div name="image displayer" className="h-[80%]">
            {/* <img></img> */}
          </div>
          <div
            name="images carousel"
            className="h-[20%] flex scrollbar-hide snap-x snap-mandatory scroll-smooth
           space-x-2 px-4 overflow-x-scroll w-[100%] my-auto 
           mx-auto place-items-center"
          >
            {/* <div
              className="cursor-pointer min-w-[5rem] min-h-[5rem] flex flex-col 
            items-center justify-center px-2 py-2 border-2
            rounded-md bg-slate-100 hover:scale-110 transition duration-150"
            >
              <UploadIcon />
              <h1 className="text-blue-500">Upload</h1>
            </div> */}
            <ImageUploadTest />
            {DUMMY_IMAGES.map((image) => (
              <div
                key={image.id}
                className="min-w-[5rem] min-h-[5rem] h-[5rem] w-[5rem]"
              >
                <img
                  src={image.url}
                  alt={image}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        <form
          className="items-center text-center w-[35%] min-h-[28rem] h-[28rem]"
          onSubmit={handleSubmit}
        >
          {/* <div className="grid grid-cols-2 gap-y-4 max-w-[25rem] xl:max-w-[40rem] mx-auto border-4 border-black"> */}
          <div className="flex flex-col justify-between max-w-[25rem] xl:max-w-[40rem] min-h-[90%] mx-auto py-4">
            {pageNumber === 1 && (
              <Fragment>
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
                  min={0}
                  placeholder="Year"
                />
                <input
                  className={style}
                  type="text"
                  name="make"
                  placeholder="Make"
                />
                <input
                  className={style}
                  type="text"
                  name="model"
                  placeholder="Model"
                />
                <input
                  className={style}
                  type="text"
                  name="trim"
                  placeholder="Trim"
                />
                <input
                  className={style}
                  type="number"
                  name="mileage"
                  placeholder="Mileage"
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
                />
                <input
                  className={style}
                  type="text"
                  name="intColor"
                  placeholder="Interior Color"
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
              </Fragment>
            )}
            {pageNumber === 3 && (
              <Fragment>
                <input
                  className={style}
                  type="number"
                  name="price"
                  placeholder="Price"
                />
                <input
                  className={style}
                  type="text"
                  name="city"
                  placeholder="City"
                />
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
              </Fragment>
            )}
          </div>
          <div className="flex min-h-[10%] items-center">
            {pageNumber > 1 && (
              <button
                type="button"
                className="text-lg mx-auto px-5 py-1 bg-purple-600 text-slate-100 rounded-2xl"
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                Back
              </button>
            )}
            {pageNumber < 3 && (
              <button
                type="button"
                className="text-lg mx-auto px-5 py-1 bg-purple-600 text-slate-100 rounded-2xl"
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Next
              </button>
            )}
            {pageNumber === 3 && (
              <button
                type="submit"
                className="text-lg mx-auto px-5 py-1 bg-blue-500 text-slate-100 rounded-2xl"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;

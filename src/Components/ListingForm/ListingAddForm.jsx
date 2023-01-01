import React, { useState, Fragment } from "react";
import UploadImage from "./UploadImage";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";
import { LeftPointArrow, RightPointArrow } from "../UI/Icons";
import { useSelector } from "react-redux";

// const defaultFormData = {
//   condition: "",
//   year: "",
//   make: "",
//   model: "",
//   trim: "",
//   mileage: "",
//   extColor: "",
//   intColor: "",
//   engineCapacity: "",
//   cylinders: "",
//   horsepower: "",
//   torque: "",
//   transmission: "",
//   price: "",
//   city: "",
//   state: "",
//   zip: "",
//   pictureKeys: [],
// };

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
  };

  // const [formData, setFormData] = useState(defaultFormData);
  const [pageNumber, setPageNumber] = useState(1);
  const [imageSelected, setImageSelected] = useState(null); //highlight the selected image

  const uploadedImageKeys = useSelector(
    (state) => state.listingImages.listingImages
  );
  //set image selected to the first image in the array when the component runs for the first time if uploaded image keys is not empty
  if (uploadedImageKeys.length > 0 && !imageSelected) {
    setImageSelected(uploadedImageKeys[0]);
  }
  console.log({ uploadedImageKeys });

  return (
    <div className="flex flex-col space-y-5 my-auto min-w-[50rem] w-[50rem] py-2">
      <h1 className="text-2xl text-center">Create a Listing</h1>
      <div name="inner container" className="flex">
        <div className="w-[65%] flex flex-col border-2 border-slate-200 rounded-xl max-h-[28rem]">
          <div
            name="image displayer"
            className="h-[75%] overflow-hidden flex justify-center place-items-center relative"
          >
            <div
              className={`left-0 absolute ${
                uploadedImageKeys.length < 1 && "opacity-0"
              }`}
            >
              <LeftScrollArrow />
            </div>
            {imageSelected && (
              <img
                src={`${process.env.REACT_APP_API_URL}/images/${imageSelected}`}
                alt={imageSelected}
                className="h-[90%] w-[90%] object-cover rounded-md my-auto"
              />
            )}
            {/* {uploadedImageKeys.length > 0 ? (
              uploadedImageKeys.map((key) => {
                return (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/images/${key}`}
                    alt={key}
                    className="h-[90%] w-[90%] object-cover rounded-md my-auto"
                  />
                );
              })
            ) : (
              <div className="">
                <h2 className="bg-slate-200 px-4 py-4 rounded-lg max-w-2rem">Upload Photos to Preview</h2>
              </div>
            )} */}
            <div
              className={`right-0 absolute ${
                uploadedImageKeys.length < 1 && "opacity-0"
              }`}
            >
              <RightScrollArrow />
            </div>
          </div>
          <div
            name="images carousel"
            className="h-[25%] flex snap-x snap-mandatory scroll-smooth
           space-x-2 px-4 overflow-x-scroll w-[100%] my-auto 
           mx-auto place-items-center border-t-2 border-slate-200 rounded-t-lg"
          >
            <UploadImage />
            {uploadedImageKeys.map((key) => (
              <div
                key={key}
                className="min-w-[5rem] min-h-[5rem] h-[5rem] w-[5rem]"
              >
                <img
                  src={`${process.env.REACT_APP_API_URL}/images/${key}`}
                  alt={key}
                  // className={`h-full w-full object-cover rounded-md ${
                  //   imageSelected && "border-2 border-blue-500"
                  // }`}
                  className={`h-full w-full object-cover rounded-md`}
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
      </div>
    </div>
  );
};

export default ListingForm;

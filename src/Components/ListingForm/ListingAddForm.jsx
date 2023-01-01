import React, { useState, useRef } from "react";
import UploadImage from "./UploadImage";
import { useSelector } from "react-redux";
import DataForm from "./DataForm";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";

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
  console.log("ListingForm.jsx RENDER");

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
  };

  const carouselRef = useRef();

  const [imageSelected, setImageSelected] = useState(null); //highlight the selected image

  const handleImageSelect = (event) => {
    setImageSelected(event.target.alt);
  };

  const uploadedImageKeys = useSelector(
    (state) => state.listingImages.listingImages
  );
  //set image selected to the first image in the array when the component runs for the first time if uploaded image keys is not empty
  if (uploadedImageKeys.length > 0 && !imageSelected) {
    setImageSelected(uploadedImageKeys[0]);
  }
  // console.log({ uploadedImageKeys });

  const leftScrollHandler = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth * 0.95;
  };

  const rightScrollHandler = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth * 0.95;
  };

  return (
    <div className="flex flex-col space-y-5 my-auto min-w-[50rem] w-[50rem] py-2">
      <h1 className="text-2xl text-center">Create a Listing</h1>
      <div name="inner container" className="flex">
        <div className="w-[65%] flex flex-col border-2 border-slate-200 rounded-xl max-h-[28rem]">
          <div
            name="image displayer"
            className="h-[75%] overflow-hidden flex justify-center place-items-center relative"
          >
            <div className="w-full h-full object-cover mx-auto">
              {imageSelected ? (
                <img
                  src={`${process.env.REACT_APP_API_URL}/images/${imageSelected}`}
                  alt={imageSelected}
                  className="h-full w-full object-cover rounded-md my-auto"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <h1 className="text-2xl text-center">Max 5 Images</h1>
                </div>
              )}
            </div>
          </div>
          <div
            name="carousel wrapper"
            className="flex justify-between relative h-[25%]"
          >
            <div
              onClick={leftScrollHandler}
              className="h-full min-w-[3rem] 
          absolute z-10 cursor-pointer left-0 flex items-center 
          opacity-50 bg-opacity-100 bg-slate-100 hover:opacity-100 
          transition duration-200 active:opacity-30
           rounded-md"
            >
              <LeftScrollArrow size={"w-8 h-8"} />
            </div>
            <div
              ref={carouselRef}
              name="images carousel"
              className="h-full flex snap-x snap-mandatory scrollbar-hide scroll-smooth
           space-x-2 px-12 overflow-x-scroll w-[100%] my-auto relative
           mx-auto place-items-center border-t-2 border-slate-200 rounded-t-lg"
            >
              <UploadImage />
              {uploadedImageKeys.map((key) => (
                <div
                  key={key}
                  className="min-w-[5rem] min-h-[5rem] h-[5rem] w-[5rem] z-0"
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}/images/${key}`}
                    alt={key}
                    onClick={handleImageSelect}
                    className={`h-full w-full object-cover rounded-md 
                  ${
                    imageSelected === key
                      ? "border-4 border-blue-500"
                      : "border-2 border-slate-200"
                  }`}
                  />
                </div>
              ))}
            </div>
            <div
              onClick={rightScrollHandler}
              className="h-full min-w-[3rem] 
          absolute z-10 cursor-pointer right-0 flex items-center 
          opacity-50 bg-opacity-100 bg-slate-100 hover:opacity-100 
          transition duration-200 active:opacity-30
           rounded-md"
            >
              <RightScrollArrow size={"w-8 h-8"} />
            </div>
          </div>
        </div>
        <DataForm />
      </div>
    </div>
  );
};

export default ListingForm;

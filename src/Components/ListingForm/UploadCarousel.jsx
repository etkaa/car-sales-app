import React, { useState, useRef, Fragment } from "react";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";
import UploadImage from "./UploadImage";
import ImageDisplayer from "./ImageDisplayer";

const UploadCarousel = ({ uploadedImageKeys }) => {
  const carouselRef = useRef();

  const [imageSelected, setImageSelected] = useState(null); //highlight the selected image

  //set image selected to the first image in the array when the component
  //runs for the first time if uploaded image keys is not empty
  if (uploadedImageKeys.length > 0 && !imageSelected) {
    setImageSelected(uploadedImageKeys[0]);
  }

  const handleImageSelect = (event) => {
    setImageSelected(event.target.alt);
  };

  const leftScrollHandler = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth * 0.95;
  };

  const rightScrollHandler = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth * 0.95;
  };

  return (
    <>
      <ImageDisplayer imageSelected={imageSelected} />
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
   rounded-bl-md"
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
          {uploadedImageKeys.length < 5 && <UploadImage />}
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
   rounded-br-md"
        >
          <RightScrollArrow size={"w-8 h-8"} />
        </div>
      </div>
    </>
  );
};

export default UploadCarousel;

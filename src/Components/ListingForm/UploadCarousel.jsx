import React, { useState, useRef, Fragment } from "react";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";
import UploadImage from "./UploadImage";
import ImageDisplayer from "./ImageDisplayer";
import { CancelIcon } from "../UI/Icons";
import { deleteImages } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { removeListingImage } from "../../features/listingImages/listingImagesSlice";

const UploadCarousel = ({ uploadedImageKeys }) => {
  const carouselRef = useRef();
  const dispatch = useDispatch();

  const [imageSelected, setImageSelected] = useState(null); //highlight the selected image
  const [isLoading, setIsLoading] = useState(false);
  //set image selected to the first image in the array when the component
  //runs for the first time if uploaded image keys is not empty
  if (uploadedImageKeys.length > 0 && !imageSelected) {
    setImageSelected(uploadedImageKeys[0]);
  }

  const handleImageSelect = (event) => {
    setImageSelected(event.target.alt);
  };

  const handleLoading = (boolean) => {
    setIsLoading(boolean);
  };

  const handleDelete = async (imageKeysToDelete) => {
    var imageKeysArray = [];
    imageKeysArray.push(imageKeysToDelete);
    // console.log(imageKeysArray);
    //call api with this key to delete the image
    const result = await deleteImages(imageKeysArray);
    //if success, update the redux state
    if (result === 200) {
      //update redux state
      dispatch(removeListingImage(imageKeysArray));
    } else {
      console.log("Error deleting image! / UploadCarousel.js");
    }
    imageKeysArray = null;
    //if fail, show error message
  };

  const leftScrollHandler = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth * 0.95;
  };

  const rightScrollHandler = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth * 0.95;
  };

  return (
    <>
      <ImageDisplayer
        uploadedImageKeys={uploadedImageKeys}
        imageSelected={imageSelected}
        isLoading={isLoading}
      />
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
          {uploadedImageKeys.length < 7 && (
            <UploadImage setIsLoading={handleLoading} uploadedImageKeys={uploadedImageKeys} />
          )}
          {uploadedImageKeys.map((key) => (
            <div
              key={key}
              className="min-w-[5rem] min-h-[5rem] h-[5rem] w-[5rem] z-0 relative"
            >
              <img
                src={`${process.env.REACT_APP_API_URL}/images/${key}`}
                alt={key}
                onClick={handleImageSelect}
                className={`h-full w-full object-cover rounded-md z-1
          ${
            imageSelected === key
              ? "border-4 border-blue-500"
              : "border-2 border-slate-200"
          }`}
              />
              <div
                className="top-0 right-0 absolute z-10 cursor-pointer"
                onClick={() => handleDelete(key)}
              >
                <CancelIcon key={key} />
              </div>
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

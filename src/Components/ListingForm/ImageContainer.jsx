import React, { useState, useRef } from "react";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";
import UploadInput from "./UploadInput";
import Display from "./Display";
import { deleteImages, deleteUnsubmittedKeys } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { removeListingImage } from "../../features/listingImages/listingImagesSlice";
import ImageItem from "./ImageItem";

const ImageContainer = ({ uploadedImageKeys }) => {
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

  //make it an array for possible future use
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
      const result = await deleteUnsubmittedKeys(imageKeysArray);
      if (result) {
        console.log("Deleted unsubmitted keys successfully!");
      }
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
    <div className="flex flex-col h-full w-full lg:min-h-[36rem]">
        <Display
          uploadedImageKeys={uploadedImageKeys}
          imageSelected={imageSelected}
          isLoading={isLoading}
        />
      <div
        name="Carousel Wrapper"
        className="flex justify-between relative min-h-[6rem] w-[100%] mx-auto"
      >
        <div
          onClick={leftScrollHandler}
          className="flex h-full min-w-[3rem] 
          absolute z-20 cursor-pointer left-0 items-center 
          opacity-70 bg-opacity-100 bg-slate-200 hover:opacity-100 
          transition duration-200 active:opacity-30
          rounded-bl-md"
        >
          <LeftScrollArrow size={"w-8 h-8"} />
        </div>
        <div
          ref={carouselRef}
          name="images carousel"
          className="min-h-[5rem] flex scrollbar-hide scroll-smooth
          space-x-2 px-12 overflow-x-auto w-[100%] my-auto relative
          mx-auto place-items-center bg-slate-100 max-w-[40rem]"
        >
          {uploadedImageKeys.length < 7 && (
            <UploadInput
              setIsLoading={handleLoading}
              uploadedImageKeys={uploadedImageKeys}
            />
          )}
          {uploadedImageKeys.map((key) => (
            <ImageItem
              key={key}
              itemKey={key}
              handleImageSelect={handleImageSelect}
              imageSelected={imageSelected}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div
          onClick={rightScrollHandler}
          className="flex h-full min-w-[3rem] 
          absolute z-20 cursor-pointer right-0 items-center 
          opacity-70 bg-opacity-100 bg-slate-200 hover:opacity-100 
          transition duration-200 active:opacity-30
          rounded-bl-md"
        >
          <RightScrollArrow size={"w-8 h-8"} />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;

// <div
//   key={key}
//   // className="min-w-[5rem] min-h-[5rem] h-[5rem] w-[5rem] z-0 relative"
//   className="h-[5rem] w-[5rem] z-0 relative"
// >
//   <img
//     src={`${process.env.REACT_APP_API_URL}/images/getImage/${key}`}
//     alt={key}
//     onClick={handleImageSelect}
//     className={`h-full w-[100%] object-cover rounded-md z-0
//     ${
//       imageSelected === key
//         ? "border-4 border-blue-500"
//         : "border-2 border-slate-200"
//     }`}
//   />
//   <div
//     className="top-0 right-0 absolute z-10 cursor-pointer"
//     onClick={() => handleDelete(key)}
//   >
//     <CancelIcon key={key} />
//   </div>
// </div>

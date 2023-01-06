import React from "react";
import Loading from "../UI/Loading";

const ImageDisplayer = ({ uploadedImageKeys, imageSelected, isLoading }) => {
  if (!uploadedImageKeys.includes(imageSelected)) {
    imageSelected = uploadedImageKeys[0];
  }

  let content;

  if (isLoading) {
    content = (
      <div className="w-full h-full object-cover mx-auto flex flex-col justify-center space-y-6">
        <h1 className="text-slate-700 font-normal animate-pulse mx-auto">
          Uploading your images...
        </h1>
        <div>
          <Loading />
        </div>
      </div>
    );
  } else {
    content = (
      <div className="w-full h-full object-cover mx-auto">
        {imageSelected ? (
          <img
            src={`${process.env.REACT_APP_API_URL}/images/getImage/${imageSelected}`}
            alt={imageSelected}
            className="h-full w-full object-cover rounded-t-md my-auto"
          />
        ) : (
          <div className="flex flex-col items-center space-y-2 justify-center h-full w-full">
            <h1 className="text-2xl text-center text-slate-600 px-4 font-light">
              Please upload pictures of your car.
            </h1>
            <h1 className="text-lg text-center text-slate-600 px-4 font-light bg-slate-100 rounded-lg">
              Up to 7 pictures.
            </h1>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      name="image displayer"
      className="h-[75%] overflow-hidden flex justify-center place-items-center relative"
    >
      {content}
    </div>
  );
};

export default ImageDisplayer;

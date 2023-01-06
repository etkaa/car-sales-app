import React from "react";
import Loading from "../UI/Loading";

const Display = ({ uploadedImageKeys, imageSelected, isLoading }) => {
  if (!uploadedImageKeys.includes(imageSelected)) {
    imageSelected = uploadedImageKeys[0];
  }

  let content;

  if (isLoading) {
    content = (
      <div className="min-w-[100%] lg:min-h-[29.5rem] md:min-h-[26rem] min-h-[20rem] flex flex-col items-center space-y-2 justify-center">
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
      <div className="max-w-[100%]  object-cover mx-auto md:rounded-t-lg">
        {imageSelected ? (
          <img
            src={`${process.env.REACT_APP_API_URL}/images/getImage/${imageSelected}`}
            alt={imageSelected}
            className="h-full w-full object-cover md:rounded-lg my-auto"
          />
        ) : (
          <div className="min-w-[100%] lg:min-h-[29.5rem] md:min-h-[26rem] min-h-[20rem] flex flex-col items-center space-y-2 justify-center">
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
    <div name="image displayer" className="relative ">
      {content}
    </div>
  );
};

export default Display;

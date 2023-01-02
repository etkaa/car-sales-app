import React from "react";

const ImageDisplayer = ({ imageSelected }) => {
  return (
    <div
      name="image displayer"
      className="h-[75%] overflow-hidden flex justify-center place-items-center relative"
    >
      <div className="w-full h-full object-cover mx-auto">
        {imageSelected ? (
          <img
            src={`${process.env.REACT_APP_API_URL}/images/${imageSelected}`}
            alt={imageSelected}
            className="h-full w-full object-cover rounded-t-md my-auto"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <h1 className="text-2xl text-center">Max 5 Images</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDisplayer;

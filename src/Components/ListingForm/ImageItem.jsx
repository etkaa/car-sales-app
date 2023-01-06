import React from "react";
import {TrashIcon } from "../UI/Icons";

const ImageItem = ({
  itemKey,
  handleImageSelect,
  imageSelected,
  handleDelete,
}) => {
  return (
    <div
      key={itemKey}
      className="min-w-[6rem] min-h-[6rem] h-[6rem] w-[6rem] z-5 relative"
      // className="h-[5rem] w-[5rem] z-5 relative"
    >
      <img
        src={`${process.env.REACT_APP_API_URL}/images/getImage/${itemKey}`}
        alt={itemKey}
        onClick={handleImageSelect}
        //   className={`h-[100%] w-[100%] object-cover rounded-md z-5
        //         ${
        //           imageSelected === itemKey
        //             ? "border-4 border-blue-500"
        //             : "border-2 border-slate-200"
        //         }`}
        className={`h-full w-full object-cover rounded-md z-5
        ${
          imageSelected === itemKey
            ? "border-4 border-blue-500"
            : "border-2 border-slate-200"
        }`}
      />
      <div
        className="top-0 right-0 absolute z-10 cursor-pointer"
        onClick={() => handleDelete(itemKey)}
      >
        <TrashIcon key={itemKey} />
      </div>
    </div>
  );
};

export default ImageItem;

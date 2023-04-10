import React from "react";
import { DeleteIcon, EditIcon } from "../UI/Icons";

const ProfileImage = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 border-slate-100 shadow-lg px-2 py-4 w-full max-w-[12rem]">
      <div className="w-full h-full aspect-square">
        <img
          alt="profile"
          className="w-full h-full object-cover rounded-full aspect-square"
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
        />
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <button
          className="flex items-center justify-center bg-slate-300 hover:bg-blue-500 rounded-full px-2 py-2 text-white
             transition duration-200"
        >
          <EditIcon styles={"w-6 h-6"} />
        </button>
        <button
          className="flex items-center justify-center bg-slate-300 hover:bg-red-500 rounded-full px-2 py-2 text-white
             transition duration-200"
        >
          <DeleteIcon size={"w-6 h-6"} />
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;

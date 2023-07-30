import React, { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "../UI/Icons";
import default_profile_1 from "../../assets/default_profile_1.png";

const ProfileImage = ({ user }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (user) {
      setImageURL(user?.profile?.profileImage);
    } else {
      setImageURL(default_profile_1);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center bg-slate-50 border-slate-100 shadow-lg px-2 py-4 w-full max-w-[12rem]">
      <div className="w-full h-full aspect-square">
        <img
          alt="profile"
          className="w-full h-full object-cover rounded-full aspect-square"
          src={imageURL || default_profile_1}
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

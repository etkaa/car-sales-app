import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ProfileImage from "./ProfileImage";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/home", { replace: true });
    return;
  }

  return (
    <section className="w-full min-h-full flex justify-center mx-auto my-auto py-2">
      <div
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start 
      space-y-4 lg:space-y-0 lg:space-x-4 max-w-3xl w-full px-4 py-4"
      >
        <ProfileImage user={user} />
        <Form user={user} />
      </div>
    </section>
  );
};

export default Profile;

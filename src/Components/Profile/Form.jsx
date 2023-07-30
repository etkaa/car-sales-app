import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfileFields } from "../../utils/utils";

const Form = ({ user }) => {
  const dispatch = useDispatch();

  const defaultProfileValues = {
    fullName: user.fullName,
    username: user.username,
    nickname: user.nickname,
    about: user.about,
  };

  const [profileValues, setProfileValues] = useState(defaultProfileValues);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const inputStyles = `w-full ${
    !error ? "border border-gray-300" : "border-2 border-red-500"
  } rounded-md py-1 px-2 outline-none
  focus:ring-2 focus:ring-blue-400 focus:border-transparent`;

  const { fullName, username, nickname, about } = profileValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setError(false);
    setProfileValues({ ...profileValues, [name]: value });

    if (profileValues !== defaultProfileValues) {
      setIsEdited(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    if (fullName.trim() === "" || nickname.trim() === "") {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    const response = await updateProfileFields(profileValues, dispatch);
    if (response) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsEdited(false);
        setIsEditingMode(false);
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg flex flex-col space-y-4 justify-between h-45 bg-slate-50 border-slate-100 shadow-lg px-2 py-4"
    >
      <div className="flex flex-col space-y-1">
        <label className="text-gray-800 font-medium">Name</label>
        <input
          className={inputStyles}
          value={fullName}
          name="fullName"
          placeholder={"Full Name"}
          disabled={!isEditingMode}
          onChange={handleChange}
        />
        <p className="text-sm pl-1 text-gray-500">
          The name you entered will be visible when users visit your profile.
        </p>
      </div>
      <div className="flex flex-col space-y-1 ">
        <label className="text-gray-800 font-medium">Username</label>
        <input
          className={inputStyles}
          value={username}
          placeholder={"User Name"}
          disabled
          title="You can't change your username."
        />
        <p className="text-sm pl-1 text-gray-500">
          This is the e-mail address you use for login. You can't change it once
          you set it (yet).
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-gray-800 font-medium">Nickname</label>
        <input
          className={inputStyles}
          value={nickname}
          name="nickname"
          placeholder={"Your Public Nickname"}
          disabled={!isEditingMode}
          onChange={handleChange}
        />
        <p className="text-sm pl-1 text-gray-500">
          This is your public nickname that appears on your listings or when you
          message a user.
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-gray-800 font-medium">About</label>
        <textarea
          className={inputStyles + " resize-none h-24"}
          value={about}
          name="about"
          placeholder={
            "I am based in Houston, TX and I love chatting about cars!"
          }
          disabled={!isEditingMode}
          onChange={handleChange}
        />
        <p className="text-sm pl-1 text-gray-500">
          You may include your location, your interests, or anything else you'd
          like to share.
        </p>
      </div>
      <div
        className={`${
          error ? "flex" : "hidden"
        } flex-col space-y-1 bg-red-500 px-2 py-2 rounded-md`}
      >
        <label className="text-center text-white">
          Error while saving your changes, please check entered information.
        </label>
      </div>
      <div className="flex justify-center space-x-3">
        <button
          className={`${
            !isEditingMode ? "" : "hidden"
          } flex justify-center items-center min-w-[5rem] bg-blue-500 text-white rounded-md disabled:opacity-50 px-1 py-1`}
          onClick={() => setIsEditingMode(true)}
          disabled={isEditingMode}
          type="button"
        >
          Edit
        </button>
        <button
          className={`${
            isEditingMode ? "" : "hidden"
          } flex justify-center items-center min-w-[5rem] bg-purple-500 text-white rounded-md px-1 py-1`}
          type="button"
          onClick={() => {
            setProfileValues(defaultProfileValues);
            setIsEditingMode(false);
            setIsSubmitting(false);
            setIsEdited(false);
            setError(false);
          }}
        >
          Cancel
        </button>
        <button
          className={`${
            isEditingMode ? "" : "hidden"
          } flex justify-center items-center min-w-[5rem] ${
            isSubmitting ? "animate-[pulse_1s_ease-in-out_infinite]" : ""
          } text-white rounded-md disabled:bg-slate-300 bg-yellow-500 px-3 py-1`}
          type="submit"
          disabled={!isEdited || error || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;

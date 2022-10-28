import React, { useState } from "react";
import { Link } from "react-router-dom";

const defaultSignUpValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

const SignUp = () => {
  const [signUpValues, setSignUpValues] = useState(defaultSignUpValues);

  const { firstName, lastName, username, password } = signUpValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const formSubmitHandler = () => {
    //send api call
  };

  return (
      <div className="flex flex-col items-center w-full bg-slate-100 h-full">
        <form className="flex flex-col items-center my-auto">
          <h2 className="text-4xl text-slate-600 font-semibold my-4">
            Create Account
          </h2>
          <div className="flex justify-between mx-auto my-3 w-[16rem] max-w-lg">
            <input
              className="px-3 py-2 outline-none w-[47%] shadow-md bg-white rounded-lg"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              value={firstName}
            ></input>
            <input
              className="px-3 py-2 outline-none w-[47%] shadow-md bg-white rounded-lg"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              value={lastName}
            ></input>
          </div>
          <input
            className="flex mx-auto px-3 py-2 my-3 outline-none w-[16rem] max-w-lg shadow-md bg-white rounded-lg"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            value={username}
          ></input>
          <input
            className="flex mx-auto px-3 py-2 my-3 outline-none w-[16rem] max-w-lg shadow-md bg-white rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            value={password}
          ></input>
          <button
            className="mx-auto my-2 text-lg text-white bg-purple-400 
          px-6 py-[0.4rem] rounded-lg mt-3 shadow-md hover:bg-pink-400 
          transition duration-100 hover:shadow-lg"
          >
            Sign Up
          </button>
          <h3 className="px-3 py-2">OR</h3>
          <button
            onClick={formSubmitHandler}
            className="mx-auto my-2 text-lg text-white bg-purple-400 
          px-6 py-[0.4rem] rounded-lg mt-3 shadow-md hover:bg-pink-400 
          transition duration-100 hover:shadow-lg"
          >
            Continue with Google
          </button>
          <div className="text-center mt-6 mb-4 mx-auto">
            <h3>Already have an account?</h3>
            <Link
              to="/authenticate/login"
              //   onClick={handleClick}
              className="font-semibold text-blue-600 text-lg hover:text-blue-400 cursor-pointer transition duration-100"
            >
              Sign in here.
            </Link>
          </div>
        </form>
      </div>
  );
};

export default SignUp;

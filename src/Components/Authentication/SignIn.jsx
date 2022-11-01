import React, { useState } from "react";
import { Link } from "react-router-dom";

const defaultSignInValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [signInValues, setSignInValues] = useState(defaultSignInValues);

  const { username, password } = signInValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignInValues({ ...signInValues, [name]: value });
  };

  const formSubmitHandler = () => {
    //send api call
  };

  return (
      <main className="flex flex-col items-center w-full bg-slate-50 h-full">
        <form className="flex flex-col items-center my-auto">
          <h2 className="text-4xl text-slate-600 font-semibold text-center my-4">
            Sign In
          </h2>
          <input
            className="flex mx-auto px-3 py-2 my-3 outline-none w-[16rem] max-w-lg shadow-md bg-white rounded-lg"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          ></input>
          <input
            className="flex mx-auto px-3 py-2 my-3 outline-none w-[16rem] max-w-lg shadow-md bg-white rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          ></input>
          <button
            className="mx-auto my-2 text-lg text-white bg-pink-400 
        px-6 py-[0.4rem] rounded-lg mt-3 shadow-md hover:bg-purple-400 transition
        duration-100 hover:shadow-lg"
          >
            Sign In
          </button>
          <h3 className="px-3 py-2">OR</h3>
          <button
            onClick={formSubmitHandler}
            className="mx-auto my-2 text-lg text-white bg-pink-400 
        px-6 py-[0.4rem] rounded-lg mt-3 shadow-md hover:bg-purple-400 
        transition duration-100 hover:shadow-lg"
          >
            Continue with Google
          </button>
          <div className="text-center mt-6 mb-4 mx-auto">
            <h3>Don't have an account?</h3>
            <Link
              to="/authenticate/signup"
              className="font-semibold text-blue-600 text-lg hover:text-blue-400 cursor-pointer transition duration-100"
            >
              Sign up here.
            </Link>
          </div>
        </form>
      </main>
  );
};

export default SignIn;

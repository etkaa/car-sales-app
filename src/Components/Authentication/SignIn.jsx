import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { batch, useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { fetchFavoriteListingDetails } from "../../features/favorites/favoritesSlice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { DUMMY_CARS } from "../AdvancedSearch/data";

const defaultSignInValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [error, setError] = useState(false);
  const [signInValues, setSignInValues] = useState(defaultSignInValues);
  const { username, password } = signInValues;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError(false);
    setSignInValues({ ...signInValues, [name]: value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    //additional check for empty string
    if (username.trim() === "" || password.trim() === "") return;

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          username: signInValues.username,
          password: signInValues.password,
        },
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        batch(() => {
          dispatch(setUser(response.data.user));
          dispatch(fetchFavoriteListingDetails());
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(true);
        console.log(error.response);
      });
  };

  ///////////DELETE LATER////////////////////////

  // const handleListingPost = async () => {
  //   await axios
  //     .post(
  //       `${process.env.REACT_APP_API_URL}/listing/insertListing`,
  //       {
  //         listings: DUMMY_CARS,
  //       },
  //       {
  //         withCredentials: true,
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  ///////////DELETE LATER////////////////////////

  return (
    <main className="flex flex-col items-center w-full bg-slate-50 min-h-full py-8">
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col items-center my-auto"
      >
        <h2 className="text-4xl text-slate-600 font-semibold text-center my-4">
          Sign In
        </h2>
        <input
          className={`${
            error && `border-2 border-red-500`
          } flex mx-auto px-3 py-2 my-3 outline-none w-[16rem] max-w-lg shadow-md bg-white rounded-lg`}
          type="email"
          name="username"
          placeholder="Email Address"
          value={username}
          onChange={handleChange}
          required
        ></input>
        <input
          className={`${
            error && `border-2 border-red-500`
          } flex mx-auto px-3 py-2 my-3 outline-none w-[16rem] max-w-lg shadow-md bg-white rounded-lg`}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          minLength="8"
          required
        ></input>
        {error && (
          <div className="text-center transition-opacity">
            <p className="text-md font-bold my-3 mx-auto px-5 w-[70%] text-slate-50 bg-red-500 rounded-md py-2">
              Please check your credentials and try again!
            </p>
          </div>
        )}
        <button
          className="mx-auto my-2 text-lg text-white bg-pink-400 
        px-6 py-[0.4rem] rounded-lg mt-3 shadow-md hover:bg-purple-400 transition
        duration-100 hover:shadow-lg"
        >
          Sign In
        </button>
        <h3 className="px-3 py-2">OR</h3>
        <button
          type="submit"
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
          {/* <button
            onClick={handleListingPost}
            className="font-semibold text-blue-600 text-lg hover:text-blue-400 cursor-pointer transition duration-100"
          >
            SEND LISTINGS NOW!
          </button> */}
        </div>
      </form>
    </main>
  );
};

export default SignIn;

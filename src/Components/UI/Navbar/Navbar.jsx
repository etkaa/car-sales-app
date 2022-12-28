import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../features/user/userSlice";
import { clearFavorites } from "../../../features/favorites/favoritesSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { HamburgerIcon, CloseIcon } from "../Icons.jsx";
import Logo from "./Logo";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  //get the userID from the store and set the isLoggedIn state when the first time component is rendered
  useEffect(() => {
    if (user === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleSignOut = () => {
    //send api call, if successful, then dispatch setUserID(null)
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(setUser(null));
          dispatch(clearFavorites());
          navigate(0);
        } else {
          console.log("logout failed");
        }
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="items-center w-[100%] rounded-b bg-slate-100 shadow-lg">
      <div className="flex justify-between items-center mx-auto max-w-7xl py-1 px-8 sm:px-auto">
        <Logo />
        <div name="menu svg" className="md:hidden" onClick={toggleMenuHandler}>
          {!isMenuOpen ? <HamburgerIcon /> : <CloseIcon />}
        </div>
        <div
          name="normal menu"
          className="hidden md:flex justify-between items-center my-auto space-x-8"
        >
          <Link
            to="/home"
            className="text-xl hover:text-gray-400 transition duration-100 py-4"
          >
            Home
          </Link>
          {/* <Link
            to="/contact"
            className="text-xl hover:text-gray-400 transition duration-100 py-4"
          >
            Contact
          </Link> */}
          {!isLoggedIn ? (
            <Fragment>
              <Link
                to="/authenticate/login"
                className="text-xl hover:text-gray-400 transition duration-100 py-4"
              >
                Login
              </Link>
              <Link
                to="/authenticate/signup"
                className="font-medium text-xl transition duration-200 text-white bg-purple-500 hover:bg-pink-500 py-2 rounded-xl px-3"
              >
                Sign Up
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link
                to="/user/favorites"
                className="text-xl hover:text-gray-400 transition duration-100 py-4"
              >
                Favorites
              </Link>
              <Link
                to="/user/profile"
                className="text-xl hover:text-gray-400 transition duration-100 py-4"
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="font-medium text-xl transition duration-100 text-slate-700 bg-yellow-400 hover:text-white hover:bg-purple-400 py-2 rounded-lg px-2"
              >
                Sign Out
              </button>
            </Fragment>
          )}
        </div>
      </div>
      <div
        name="mobile menu"
        className={`md:hidden ${!isMenuOpen && "hidden"}`}
      >
        {!isLoggedIn ? (
          <Fragment>
            <Link
              to="/authenticate/login"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Login
            </Link>
            <Link
              to="/authenticate/signup"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Contact
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link
              to="/user/favorites"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Favorites
            </Link>
            <Link
              to="/profile"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Profile
            </Link>
            <Link
              to="/messages"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Messages
            </Link>
            <Link
              onClick={handleSignOut}
              className="block hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Sign Out
            </Link>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

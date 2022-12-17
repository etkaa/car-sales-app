import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserID } from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

import { HamburgerIcon, CloseIcon } from "../Icons.jsx";
import Logo from "./Logo";

const Navbar = () => {
  const userID = useSelector((state) => state.user.userID);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  //get the userID from the store and set the isLoggedIn state when the first time component is rendered
  useEffect(() => {
    if (userID === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [userID]);

  const handleSignOut = () => {
    dispatch(setUserID(null));
    navigate("/home");
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
                className="font-medium text-xl transition duration-100 text-slate-700 bg-yellow-400 hover:text-white hover:bg-purple-400 py-2 rounded-lg px-2"
              >
                Sign Up
              </Link>
            </Fragment>
          ) : (
            <button
              onClick={handleSignOut}
              className="font-medium text-xl transition duration-100 text-slate-700 bg-yellow-400 hover:text-white hover:bg-purple-400 py-2 rounded-lg px-2"
            >
              Sign Out
            </button>
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
              className="block hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Login
            </Link>
            <Link
              to="/authenticate/signup"
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/contact"
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Contact
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link
              to="/profile"
              className="block  hover:bg-slate-200 border-b-2 px-4 py-4 text-xl text-center"
            >
              Profile
            </Link>
            <Link
              to="/messages"
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

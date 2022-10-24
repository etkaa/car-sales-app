import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="items-center w-screen rounded-b bg-gray-100 shadow-lg">
      <div className="flex justify-between items-center mx-auto max-w-7xl py-1 px-8 sm:px-auto">
        <Link
          to="/home"
          className="sm:w-1/2 md:w-4/12 flex items-center text-center justify-start space-x-3 py-4 hover:text-blue-400 transition duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
            />
          </svg>
          <h2 className="text-2xl">
            C A R S <b>N O W</b>
          </h2>
        </Link>
        <div name="menu svg" className="md:hidden" onClick={toggleMenuHandler}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
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
          <Link
            to="/contact"
            className="text-xl hover:text-gray-400 transition duration-100 py-4"
          >
            Contact
          </Link>
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
        </div>
      </div>
      <div
        name="mobile menu"
        className={`md:hidden ${!isMenuOpen && "hidden"}`}
      >
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
      </div>
    </nav>
  );
};

export default Navbar;

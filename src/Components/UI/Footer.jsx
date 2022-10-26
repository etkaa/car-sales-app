import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="mt-auto mb-0">
    <footer className="flex flex-col justify-between w-full bg-slate-200 h-[10rem] mt-auto">
      <div className="hidden xl:flex justify-between w-3/4 max-w-7xl mx-auto my-auto px-4">
        <div className="flex flex-col justify-between w-[15%] text-left">
          <ul>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                {"Home"}
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between w-[15%] text-center">
          <ul>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Youtube
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between w-[15%] text-right">
          <ul>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-md text-slate-500 font-medium hover:text-slate-700"
              >
                Legal Disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-md mx-auto my-auto">
        <h2 className="text-xl text-slate-400 text-center font-semibold">
          C A R S N O W &copy; {new Date().getFullYear()}
        </h2>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;

import React from "react";

const Loading = () => (
  <div className="fixed top-50 left-50 w-full h-full z-9999 bg-white opacity-75 flex items-center justify-center">
    <div className="relative inline-block w-16 h-16">
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-500 animate-pulse delay-75" />
      <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-purple-500 animate-pulse delay-150" />
      <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-red-500 animate-pulse delay-225" />
      <div className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-pink-500 animate-pulse delay-300" />
    </div>
  </div>
);

export default Loading;

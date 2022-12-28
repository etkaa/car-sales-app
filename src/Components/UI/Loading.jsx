import React from "react";

const Loading = () => (
  <div className="w-full h-full z-9999 opacity-75 flex items-center justify-center my-auto mx-auto">
    <div className="relative inline-block w-16 h-16 animate-spin">
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-500 animate-pulse" />
      <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-purple-500 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-red-500 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-pink-500 animate-pulse" />
    </div>
  </div>
);

export default Loading;

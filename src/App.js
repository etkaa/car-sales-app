import React from "react";
import Authenticate from "./Components/Authentication/Authenticate";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Favorites from "./Components/Favorites/Favorites";
import AddListing from "./Components/ListingForm/AddListing";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route
        path="/authenticate/login"
        element={<Authenticate returningUser={true} />}
      />
      <Route
        path="/authenticate/signup"
        element={<Authenticate returningUser={false} />}
      />
      <Route path="/listing/:listingID" element={<ListingDetail />} />
      <Route path="/user/favorites" element={<Favorites />} />
      <Route path="/listing/add" element={<AddListing />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;

import React, { useEffect } from "react";
import Authenticate from "./Components/Authentication/Authenticate";
import Home from "./Components/Home/Home";
import Navbar from "./Components/UI/Navbar/Navbar";
// import Footer from "./Components/UI/Footer";
import { Routes, Route } from "react-router-dom";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Favorites from "./Components/Favorites/Favorites";
import CreateListing from "./Components/ListingForm/CreateListing";
import { checkAuth } from "./utils/checkAuth";
import { useDispatch } from "react-redux";
import { setUser } from "./features/user/userSlice";
import { clearFavorites } from "./features/favorites/favoritesSlice";
import MyListings from "./Components/MyListings/MyListings";

function App() {
  const dispatch = useDispatch();
  //run use effect only once to check if the user session is still valid
  useEffect(() => {
    const fetchAuthStatus = async () => {
      const response = await checkAuth();
      if (!response) {
        dispatch(setUser(null));
        dispatch(clearFavorites());
      }
    };
    fetchAuthStatus();
  }, [dispatch]);

  return (
    <>
      <Navbar />
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
        <Route path="/user/listings" element={<MyListings />} />
        <Route path="/listing/add" element={<CreateListing />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

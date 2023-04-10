import React, { useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Authenticate from "./Components/Authentication/Authenticate";
import Home from "./Components/Home/Home";
import Navbar from "./Components/UI/Navbar/Navbar";
// import Footer from "./Components/UI/Footer";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Favorites from "./Components/Favorites/Favorites";
import CreateListing from "./Components/ListingForm/CreateListing";
import Profile from "./Components/Profile/Profile";
import { checkAuth } from "./utils/checkAuth";
import { useDispatch } from "react-redux";
import { resetUser } from "./features/user/userSlice";
import { resetFavorites } from "./features/favorites/favoritesSlice";
import MyListings from "./Components/MyListings/MyListings";
import ScrollToTop from "./Components/UI/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  //run use effect only once to check if the user session is still valid
  useEffect(() => {
    const fetchAuthStatus = async () => {
      const response = await checkAuth();
      if (!response) {
        dispatch(resetUser());
        dispatch(resetFavorites());
      }
    };
    fetchAuthStatus();
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <ScrollToTop />
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
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/listing/add" element={<CreateListing />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;

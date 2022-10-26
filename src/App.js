import React from "react";
import Authenticate from "./Components/Authentication/Authenticate";
import Home from "./Components/Home/Home";
import { Routes, Route} from "react-router-dom";

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
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

export default App;

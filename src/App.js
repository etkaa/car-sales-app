import Authenticate from "./Components/Authentication/Authenticate";
import Home from "./Components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import axios from "axios";
import { Navigate } from "react-router";

export const checkAuth = async () => {
  let result;
  await axios
    .get(`${process.env.REACT_APP_API_URL}/auth/status`, {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        result = true;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        result = false;
      }
    });
  return result;
};

export const redirectToLogin = () => {
  return <Navigate to="/login" />;
};

import React from "react";
import { Navigate } from "react-router-dom";
import { decode as jwt_decode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }
  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    console.log("Token expiration time:", decodedToken.exp);
    console.log("Current time:", currentTime);

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

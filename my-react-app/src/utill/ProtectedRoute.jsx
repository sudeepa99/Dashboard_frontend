import React from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }
  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;

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

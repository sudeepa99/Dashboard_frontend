import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserTable from "../components/userTable";

export default function Dashboard() {
  const [role, setRole] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("role") || location.state?.role;
    setRole(storedRole);
  }, [location.state]);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div>
      {role === "ADMIN" ? (
        <div>
          <h2>Welcome Admin</h2>
          <UserTable />
          <button
            onClick={handleLogout}
            className="absolute px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700 top-3 right-3"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Welcome user, you have limited access</p>
      )}
    </div>
  );
}

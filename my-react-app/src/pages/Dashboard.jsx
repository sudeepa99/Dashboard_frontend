import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import UserTable from "../components/userTable";

export default function Dashboard() {
  const [role, setRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedRole = localStorage.getItem("role") || location.state?.role;
    setRole(storedRole);
  }, [location.state]);

  return (
    <div>
      {role === "ADMIN" ? (
        <div>
          <h2>Welcome Admin</h2>
          <UserTable />
        </div>
      ) : (
        <p>Welcome user,you have limited access</p>
      )}
    </div>
  );
}

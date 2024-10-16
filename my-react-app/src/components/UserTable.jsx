import React, { useEffect, useState } from "react";
import { deleteUser, fetchUsers, updateUser } from "../services/UserService";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        if (data.status) {
          setUsers(data.data);
        } else {
          setError("Failed to fetch users");
        }
      } catch (error) {
        setError("Error fetching users: " + error.message);
      }
    };

    getUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleEditClick = (user) => {
    setEditingUser(user.user_id);
    setUpdatedUser(user);
  };

  const handleSaveClick = async () => {
    if (window.confirm("Are you sure you want to save changes?")) {
      try {
        const data = await updateUser(updatedUser.user_id, updatedUser);
        if (data.status) {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.user_id === updatedUser.user_id ? updatedUser : user
            )
          );
          setEditingUser(null);
        } else {
          setError("Failed to save changes");
        }
      } catch (error) {
        setError("Error saving changes: " + error.message);
      }
    }
  };

  const handleDeleteClick = async (user) => {
    if (user.roles[0].name === "admin") {
      alert("Admin users cannot be deleted.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(user.user_id);
        setUsers((prevUsers) =>
          prevUsers.filter((u) => u.user_id !== user.user_id)
        );
      } catch (error) {
        setError("Error deleting user: " + error.message);
      }
    }
  };

  const handleCancelClick = () => {
    setEditingUser(null);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              ID
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              First Name
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Last Name
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Email
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Role
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td className="px-4 py-3 text-left">{user.user_id}</td>
              <td className="px-4 py-3 text-left">
                {editingUser === user.user_id ? (
                  <input
                    type="text"
                    name="firstName"
                    value={updatedUser.firstName}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td className="px-4 py-3 text-left">
                {editingUser === user.user_id ? (
                  <input
                    type="text"
                    name="lastName"
                    value={updatedUser.lastName}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td className="px-4 py-3 text-left">
                {editingUser === user.user_id ? (
                  <input
                    type="text"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="px-4 py-3 text-left">{user.roles[0].name}</td>
              <td className="px-4 py-3 text-left">
                {editingUser === user.user_id ? (
                  <>
                    <button
                      className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                    <button
                      className="px-4 py-2 ml-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 ml-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                      onClick={() => handleDeleteClick(user)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

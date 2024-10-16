const BASE_URL = "http://localhost:8080/api/user/";

export const fetchUsers = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch users");
  return await response.json();
};

export const updateUser = async (userId, userData) => {
  const response = await fetch(`${BASE_URL}${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("Failed to update user");
  return await response.json();
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${BASE_URL}${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete user");
  return response;
};

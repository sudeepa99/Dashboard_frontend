import axios from "axios";

const api_url = "http://localhost:8080/api/auth";

export const Signup = async (userData) => {
  const reponse = await axios.post(`${api_url}/signup`, userData);
  return Response.data;
};

export const Login = async (userData) => {
  const reponse = await axios.post(`${api_url}/login`, userData);
  return Response.data;
};

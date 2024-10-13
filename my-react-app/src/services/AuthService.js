import axios from "axios";

const api_url = "http://localhost:8080/api/auth";

export const SignupRequest = async (userData) => {
  const reponse = await axios.post(`${api_url}/register`, userData);
  return Response.data;
};

export const LoginRequest = async (userData) => {
  const reponse = await axios.post(`${api_url}/login`, userData);
  return Response.data;
};

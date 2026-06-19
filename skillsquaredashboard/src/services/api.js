import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAdmin = async (username, password) => {
  return API.post("/admin/login", {
    username,
    password,
  });
};

export default API;
import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/create", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/login", userData);
  return res.data;
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

const authService = {
  register,
  login,
  logout
};

export default authService;


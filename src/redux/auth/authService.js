import axios from "axios";
import { BASE_URL } from "../../utils/axios";
import { assert, http } from "../../utils";

const login = async (userData) => {
 try {
    const res = await http.post(`${BASE_URL}/rest-auth/login/`, userData)

   if (res.data) {
     // Extract the tokens from the response
     const { refresh, access } = res.data;

     // Store the tokens in localStorage
     localStorage.setItem("refreshToken", JSON.stringify(refresh));
     localStorage.setItem("accessToken", JSON.stringify(access));
   }

   return res.data;
 } catch (error) {
  console.log("Login Error ", error.message);
 }
};

const logout = async () => {
  localStorage.removeItem("accessToken");
};

const getBooks = async () => {
  const res = await http.get(`${BASE_URL}/get_books/`);
  return assert(res, res.data, "Retrieval of books failed", res);
};

const authService = {
  login,
  logout,
  getBooks,
};

export default authService;

import axios from "axios";

const API_URL = "http://localhost:3001";

const axiosInstence = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function signup(
  userName: string,
  email: string,
  password: string
) {
  const response = await axiosInstence.post("/auth/user/signup", {
    userName,
    email,
    password,
  });
  return response.data.token;
}

export const signin = async (email: string, password: string) => {
  const response = await axiosInstence.post("/auth/user/signin", {
    email,
    password,
  });
  return response.data.token;
};

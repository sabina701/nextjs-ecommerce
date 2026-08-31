import config from "@/app/config/config";
import axios from "axios";

export async function login({ email, password }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
  console.log(response);
  return response.data;
}

export async function signUp({ city, province, name, email, phone, password }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name,
    email,
    phone,
    password,
    address: { city, province },
  });
  console.log(response);
  return response.data;
}

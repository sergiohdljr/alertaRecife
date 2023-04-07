import axios from 'axios'

export const api = axios.create({
  baseURL: "https://alertarecife.onrender.com",
});
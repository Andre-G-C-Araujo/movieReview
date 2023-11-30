import axios from "axios";

export const api = axios.create({
  baseURL: "https://moviesreview-api.onrender.com",
});

import axios from "axios";
// import store from "../store";

const api = axios.create({
  baseURL: "http://localhost:3090/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

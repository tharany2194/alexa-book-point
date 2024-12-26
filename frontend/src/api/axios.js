import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api", // Replace with your backend base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

export default instance;

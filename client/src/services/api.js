import axios from "axios";

// For CRA (your project), env variable must start with REACT_APP_
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// =====================================================
// 🔐 Automatically attach JWT token to all api requests
// =====================================================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("portfolio_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

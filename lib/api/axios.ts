import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // enable cookies if you want to store JWT tokens
});

// Optional: Response interceptor to handle global errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Here you can handle global API errors
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

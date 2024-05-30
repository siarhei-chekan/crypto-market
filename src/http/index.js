import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.binance.com/api/v3",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
  }
});

axiosInstance.interceptors.response.use(
  (response) => {    
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
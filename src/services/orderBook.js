import axiosInstance from "@/http";

export function orderBookService() {
  const axios = axiosInstance;

  const testConnect = () => axios.get("/ping");
  const getOrderBook = (symbol) => axios.get(`/depth?symbol=${symbol}`);

  return { testConnect, getOrderBook};
}
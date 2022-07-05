import axios from "axios";
import { toast } from "react-toastify";
const successToast = (message) => {
  if (message) {
    //toast.success(message);
  }
};
const errorToast = (statusCode, message) => {
  if (statusCode) {
    toast.error(String(message));
  }
};
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { message } = response.data;
    successToast(message);

    return (response || {}).data || undefined;
  },
  (error) => {
    const { statusCode, message } = error.response.data;
    errorToast(statusCode, message);

    return Promise.reject(error.message);
  }
);

export default axiosInstance;

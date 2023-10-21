import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken } from "../utils/local-storage";
// import { localStorageService } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      localStorageService.clearToken();
      window.location.assign("/");
      return;
    }
    return Promise.reject(err);
  }
);

export default axios;

// import axios from 'axios';
// import { BACKEND_URL } from './env';
// import { getAccessToken, removeAccessToken } from '../utils/local-storage';

// axios.defaults.baseURL = BACKEND_URL;

// axios.interceptors.request.use(config => {
//   const token = getAccessToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       removeAccessToken();
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// export default axios;

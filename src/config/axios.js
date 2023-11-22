import axios from "axios"; //axios: เป็น library สำหรับทำ HTTP requests
import { BACKEND_URL } from "./env"; //BACKEND_URL: เป็น constant ที่เก็บ URL ของ backend server ที่จะถูกใช้ในทุก request
import { getAccessToken, removeAccessToken } from "../utils/local-storage"; //getAccessToken: เป็นฟังก์ชันที่ใช้ในการดึง Access Token จาก local storage.

axios.defaults.baseURL = BACKEND_URL;
// ทำให้ทุก request ที่ส่งจะใช้ URL ของ backend server ที่ถูกกำหนดใน BACKEND_URL.
axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
  // Interceptor นี้ทำงานทุกครั้งที่ request ถูกส่ง โดยมีหน้าที่เพิ่ม Authorization header ใน request ในกรณีที่มี Access Token ใน local storage.
});

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      removeAccessToken();
      window.location.assign("/");
      return;
    }
    return Promise.reject(err);
    // Interceptor นี้ทำงานทุกครั้งที่ response ถูกรับ. ถ้า response มี status เป็น 401 (Unauthorized), ก็จะทำการลบ Access Token ออกจาก local storage และ redirect ผู้ใช้ไปยังหน้าหลัก ("/").
  }
);

export default axios;
//Component "Button" ถูก export เพื่อให้สามารถนำไปใช้งานในไฟล์อื่น

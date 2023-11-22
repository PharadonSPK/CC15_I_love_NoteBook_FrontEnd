import { useState, createContext, useContext, useEffect } from "react";
import axios from "../config/axios"; //ไคลเอ็นต์ HTTP ( axios) ที่จำเป็นสำหรับการร้องขอ
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); //สร้าง React ที่เรียกว่าAuthContext ใช้ในการจัดการฟังก์ชันที่เกี่ยวข้องกับการรับรองความถูกต้องทั่วทั้งแอป

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState({});
  // AuthContextProvider มีการกำหนดองค์ประกอบการทำงาน ใช้childrenเป็นพร็อพ บ่งบอกว่าออกแบบมาเพื่อพันส่วนประกอบอื่นๆ
  // authUserสถานะถูกเตรียมใช้งาน useStateเพื่อจัดการข้อมูลของผู้ใช้ ในการรับรองความถูกต้อง
  // console.log(authUser);

  console.log("--------------", authUser);
  const login = async (credential) => {
    try {
      const res = await axios.post(
        "http://localhost:8888/auth/login",
        credential
      );
      addAccessToken(res.data.accessToken);
      setAuthUser(() => res.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  //   ฟังก์ชัน นี้login ส่งคำขอ POST โดยการเข้าสู่ระบบ โดยใช้ Axios โดยข้อมูลเป็นพาร์ทพารามิเตอร์
  // เมื่อเข้าสู่ระบบสำเร็จ ระบบจะจัดเก็บโทเค็นไว้ในตัวเครื่อง และอัปเดตสถานะauthUser ด้วยข้อมูลผู้ใช้จากการตอบกลับ

  const logout = () => {
    removeAccessToken();
    // setAuthUser(null);
  };
  // ฟังก์ชัน นี้logoutถูกกำหนดไว้ ซึ่งจะลบโทเค็น ที่เข้าถึงออกจาก ที่จัดเก็บในเครื่องและตั้งค่า authUserเป็นnull
  console.log(authUser);
  return (
    <AuthContext.Provider value={{ login, authUser, logout, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
// ส่วนประกอบส่งคืนAuthContext.Provider ซึ่งล้อมรอบส่วนประกอบย่อย โดยจัดเตรียมค่าบริบทด้วยlogin, authUserและlogoutฟังก์ชันให้กับลูกหลาน

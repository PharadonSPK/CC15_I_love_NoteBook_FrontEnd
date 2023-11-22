import { useContext } from "react"; //useContextเบ็ดจากไลบรารี React useContextเป็นตะขอ
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}
// ฟังก์ชัน นี้useAuthถูกกำหนดให้เป็น hook แบบกำหนดเอง

// ภายในฟังก์ชันuseContextใช้เพื่อรับค่าปัจจุบันของAuthContext สำหรับใช้useContext(AuthContext)ในส่วนประกอบเป็นหลัก

// hook useAuthใช้ภายในส่วนประกอบเพื่อให้เข้าถึงค่าและฟังก์ชันที่เกี่ยวข้องกับการตรวจสอบสิทธิ์ที่จัดทำโดยAuthContext

import { Navigate } from "react-router-dom"; //โค้ดนำเข้าNavigateจากreact-router-domไลบรารีใช้สำหรับการนำทางที่ประกาศในแอปพลิเคชัน React
import { useAuth } from "../../hooks/use-auth.js";
//นำเข้า hook แบบกำหนดเองuseAuthจากไฟล์ซึ่งอยู่ที่ เพื่อเข้าถึงข้อมูลที่เกี่ยวข้องกับการตรวจสอบสิทธิ์
export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  //not login yet
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  //admin
  if (authUser.isAdmin === true) {
    return <Navigate to="/ProfileAdmin" />;
  }
  //user
  if (!authUser.isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
}
// กำหนดส่วนประกอบRedirectIfAuthenticated

// รับchildrenเป็นพร็อพ ใน React childrenหมายถึงเนื้อหาที่ซ้อนกันภายในส่วนประกอบเมื่อมีการใช้งาน

// useAuthกถูกเรียกเพื่อรับauthUserเพื่อรับรองความถูกต้อง

// authUserมีอยู่หรือไม่ หากเป็นเช่นนั้น (หมายความว่าผู้ใช้ได้รับการรับรองความถูกต้องแล้ว) มันจะส่งคืนNavigateส่วนประกอบโดยtoตั้งค่า prop เป็น"/"เปลี่ยนเส้นทางผู้ใช้ไปยังโฮมเพจอย่างมีประสิทธิภาพ

// หากผู้ใช้ไม่ได้รับการรับรองความถูกต้อง ( เป็นauthUserเท็จ) ก็จะส่งคืนต้นฉบับ childrenเพื่อให้แน่ใจว่าเนื้อหาที่รวมไว้RedirectIfAuthenticatedจะถูกเรนเดอร์หากผู้ใช้ไม่ได้รับการรับรองความถูกต้อง

import { useState, createContext, useContext, useEffect } from "react"; //โค้ดนำเข้า React hooks ( useState, createContext, useContext, useEffect)
import axios from "../config/axios";
// import axios from "axios";
//Axios การร้องขอ HTTP
export const ProductContext = createContext();
// มันสร้างบริบท React ชื่อProductContext. บริบทนี้จะถูกใช้เพื่อจัดการและแชร์สถานะและฟังก์ชันที่เกี่ยวข้องกับข้อมูลผลิตภัณฑ์ทั่วทั้งแอป
export default function ProductContextProvider({ children }) {
  const [allProduct, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    try {
      const result = await axios.get("http://localhost:8888/product/all");
      console.log(result);
      setAllProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider value={{ allProduct, getAllProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
// ProductContextProvider มีหน้าที่จัดการสถานะที่เกี่ยวข้องกับข้อมูลผลิตภัณฑ์

// ตัวแปรallProductโดยใช้useStatehook และกำหนดฟังก์ชันgetAllProduct ที่สร้างคำขอ GET เพื่อดึงข้อมูลผลิตภัณฑ์ทั้งหมด

// hook useEffectใช้เพื่อเรียกgetAllProduct

// ส่วนประกอบแสดงผล โดยProductContext.Providerส่งผ่าน allProduct

export const useProduct = () => {
  return useContext(ProductContext);
};
//มีการกำหนดชื่อ hook useProductแบบกำหนดเอง hook นี้ใช้useContexthook เพื่อเข้าถึงค่าปัจจุบันของProductContext.

// ผลิตภัณฑ์ในส่วนประกอบโดยไม่ต้องใช้โดยตรงuseContext(ProductContext)

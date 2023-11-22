import { useState, createContext, useContext, useEffect } from "react";
import axios from "../config/axios";

export const CartContext = createContext();
// ฟังก์ชันที่เกี่ยวข้องกับตะกร้าสินค้าทั่วทั้งแอป

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState();
  const [query, setQuery] = useState("");
  const addToCart = async (productId) => {
    try {
      const result = await axios.post("http://localhost:8888/cart", {
        productId,
      });
      setCart(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, query, setQuery }}>
      {children}
    </CartContext.Provider>
  );
}
// เริ่มต้นตัวแปรสถานะcartโดยใช้useStatehook และกำหนดฟังก์ชันaddToCartที่สร้างคำขอ POST เพื่อเพิ่มรายการลงในรถเข็น

// มีการกำหนด ส่วนประกอบCartContextProviderซึ่งมีหน้าที่รับผิดชอบในการจัดเตรียมค่าบริบทและจัดการสถานะที่เกี่ยวข้องกับตะกร้าสินค้า

// ส่วนประกอบแสดงผล โดยCartContext.Providerส่งผ่านcartสถานะและsetCartฟังก์ชันเป็นค่าบริบท ผู้ให้บริการล้อมส่วนประกอบย่อย

export const useCart = () => {
  return useContext(CartContext);
};
// มีการกำหนดชื่อ hook useCartแบบกำหนดเอง hook นี้ใช้useContexthook เพื่อเข้าถึงค่าปัจจุบันของCartContext.
// มีวัตถุประสงค์เพื่อใช้ภายในส่วนประกอบการทำงานเที่เกี่ยวข้องกับรถเข็น

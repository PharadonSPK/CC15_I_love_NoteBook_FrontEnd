import { useState, createContext, useContext, useEffect } from "react";
import axios from "../config/axios";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState();

  const addToCart = async () => {
    try {
      const result = await axios.post("http://localhost:8888/cart/");
      setCart(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

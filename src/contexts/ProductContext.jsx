import { useState, createContext, useContext, useEffect } from "react";
import axios from "../config/axios";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allProduct, setAllProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      const result = await axios.get("http://localhost:8888/product/all");
      setAllProduct(result.data);
      // console.log(result.data);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ allProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </AuthContextProvider>

  // </React.StrictMode>,
);

// 1:24 https://www.youtube.com/watch?v=OXHEOBvOiWc&list=PL2pMBsI7XJjOir5w1Lx_dcmjlplFsu-pC&index=66
// 7:52 login suc
// https://www.youtube.com/watch?v=1z2seLy5mnM&list=PL2pMBsI7XJjOir5w1Lx_dcmjlplFsu-pC&index=68

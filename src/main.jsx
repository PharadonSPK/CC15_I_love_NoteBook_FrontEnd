import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";
import Route from "././router/route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Route />
  </AuthContextProvider>
);
// createRoot ซึ่งเป็น API ในreact
// document.getElementById("root") คือตำแหน่งที่ React จะทำการ render component ทั้งหมดลงไป
// AuthContext เพื่อให้ Component ทั้งหมดที่อยู่ภายใต้ <App />

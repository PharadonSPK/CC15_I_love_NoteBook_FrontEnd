import Route from "./router/route";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <Route />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;

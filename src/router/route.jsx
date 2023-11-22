import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import Register from "../features/auth/Register";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import AuthContextProvider from "../contexts/AuthContext";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import ProductContextProvider from "../contexts/ProductContext";
import CartContextProvider from "../contexts/CartContext";
import ProfileAdmin from "../pages/ProfileAdmin";
import CartItem from "../components/CartItem";

const router = createBrowserRouter([
  //componentเข้าไม่ได้ถ้าไม่login

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          // <RedirectIfAuthenticated>
          <ProductContextProvider>
            <CartContextProvider>
              <HomePage />
            </CartContextProvider>
          </ProductContextProvider>
          // {/* </RedirectIfAuthenticated> */}
        ),
      },

      {
        path: "ProfilePage",
        element: (
          <ProductContextProvider>
            <CartContextProvider>
              <ProfilePage />
            </CartContextProvider>
          </ProductContextProvider>
        ),
      },
      {
        path: "CartItem",
        element: <CartItem />,
      },
      {
        path: "ProfileAdmin",
        element: (
          // <RedirectIfAuthenticated>
          <ProfileAdmin />
          //* </RedirectIfAuthenticated> */}
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      //pathไปlogin
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
  // //pathไปHomePage
  // {
  //   path: "/HomePage",
  //   element: (
  //     <RedirectIfAuthenticated>
  //       <HomePage />
  //     </RedirectIfAuthenticated>
  //   ),
  // },

  // {
  //   path: "/Cart",
  //   element: (
  //     <RedirectIfAuthenticated>
  //       <CartPage />
  //     </RedirectIfAuthenticated>
  //   ),
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}

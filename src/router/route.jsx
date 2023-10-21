import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import Register from "../features/auth/Register";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import AuthContextProvider from "../contexts/AuthContext";

const router = createBrowserRouter([
  //componentเข้าไม่ได้ถ้าไม่login
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
    ),
    children: [{ path: "", element: <HomePage /> }],
  },
  //pathไปlogin
  {
    path: "/Register",
    element: (
      <RedirectIfAuthenticated>
        <Register />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  //pathไปHomePage
  {
    path: "/HomePage",
    element: (
      <RedirectIfAuthenticated>
        <HomePage />
      </RedirectIfAuthenticated>
    ),
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}

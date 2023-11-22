import { Outlet } from "react-router-dom";
import Nav from "../Navigation/Nav";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

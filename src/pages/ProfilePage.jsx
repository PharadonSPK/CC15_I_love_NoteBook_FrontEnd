import React from "react";
import { useAuth } from "../hooks/use-auth";
import ProfileAdmin from "./ProfileAdmin";
import HomePage from "./HomePage";
import CartPage from "./CartPage";

export default function ProfilePage() {
  const { authUser } = useAuth();

  console.log("-------------------", authUser);
  return (
    <div>{authUser?.users?.isAdmin ? <ProfileAdmin /> : <CartPage />}</div>
  );
}

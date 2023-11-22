import React from "react";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import axios from "axios";
export default function ProfileAdmin() {
  const { authUser, setAuthUser } = useAuth();
  console.log(111111111111113414141414);
  useEffect(() => {
    axios
      .get("auth/me")
      .then((e) => {
        setAuthUser(e.data);
        console.log(e);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(`jgjjgjgjgjgjjgk`, authUser);
  return (
    <div>
      ytjtu
      <div>ProfileAdmin</div>
    </div>
  );
}

import { useState, createContext, useContext, useEffect } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  // console.log(authUser, "before useEffect");
  // useEffect(() => {
  //   axios.get("/auth/me").then((res) => {
  //     setAuthUser(res.data.users);
  //   });
  // }, []);
  // const navigate = useNavigate();
  // console.log(authUser, "after");
  const login = async (credential) => {
    try {
      const res = await axios.post(
        "http://localhost:8888/auth/login",
        credential
      );
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.users);
      // navigate("/Homepage");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };
  return (
    <AuthContext.Provider value={{ login, authUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

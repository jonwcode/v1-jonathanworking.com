import React, { useState, useEffect } from "react";
import { useReadCookie } from "../hooks/cookies";
import UserContext from "./user-context";

const UserContextProvider = ({ children }) => {
  const readCookie = useReadCookie;

  const [user, setUser] = useState({
    name: null,
    userID: null,
    token: null,
    permissions: null,
    loginStatus: false,
    checkLoginStatusReady: false,
  });

  useEffect(() => {
    loginStatus();
  }, []);

  const loginStatus = async () => {
    return new Promise(async (resolve, rej) => {
      // So we'll reach out to the server and check to see if the
      // User is logged in

      const token = readCookie("token");

      if (token && token.length === 174) {
        // send a request to see if this is a valid user
        const req = await fetch("/api/checkLoginStatus.php");

        const res = await req.json();

        // console.log(res);
        handleLogUserIn(res);
      } else {
        setUser((prev) => {
          return {
            ...prev,
            name: null,
            userID: null,
            token: null,
            permissions: null,
            loginStatus: false,
            checkLoginStatusReady: true,
          };
        });
      }
      resolve();
    });
  };

  const handleLogUserIn = (res) => {
    if (res.success === true) {
      setUser((prev) => {
        return {
          ...prev,
          name: res.name,
          userID: res.userID,
          token: res.token,
          permissions: res.permissions,
          loginStatus: true,
          checkLoginStatusReady: true,
        };
      });
    }
  };

  const logout = () => {
    return new Promise(async (resolve, rej) => {
      const req = await fetch("/api/logout.php");
      const res = await req.json();

      if (res.success === true) {
        setUser((prev) => {
          return {
            ...prev,
            name: null,
            userID: null,
            token: null,
            permissions: null,
            loginStatus: false,
            checkLoginStatusReady: true,
          };
        });
        resolve();
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        name: user.name,
        userID: user.userID,
        token: user.token,
        permissions: user.permissions,
        loginStatus: user.loginStatus,
        checkLoginStatusReady: user.checkLoginStatusReady,
        logout,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

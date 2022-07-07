import React from "react";
export default React.createContext({
  name: null,
  userID: null,
  permissions: null,
  loginStatus: false,
  token: null,
  checkLoginStatusReady: false,
  ready: () => {},
  setUser: () => {},
  logout: () => {},
});

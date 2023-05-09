<<<<<<< HEAD
import React, { useEffect, useContext } from "react";
import userContext from "../store/user-context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const userCtx = useContext(userContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (userCtx.loginStatus === true) {
      Promise.all([userCtx.logout()]).then(() => {
        Navigate("/");
      });
    } else {
      console.log(userCtx);
    }
  }, []);

  return <span style={{ color: "#ffffff" }}>Logging out...</span>;
};

export default Logout;
=======
import React, { useEffect, useContext } from "react";
import userContext from "../store/user-context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const userCtx = useContext(userContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (userCtx.loginStatus === true) {
      Promise.all([userCtx.logout()]).then(() => {
        Navigate("/");
      });
    } else {
      console.log(userCtx);
    }
  }, []);

  return <span style={{ color: "#ffffff" }}>Logging out...</span>;
};

export default Logout;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)

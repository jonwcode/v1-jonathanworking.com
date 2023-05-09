<<<<<<< HEAD
import React, { useContext } from "react";
import Nav from "./nav";
import css from "./header.module.css";
import userContext from "../store/user-context";
import { Link } from "react-router-dom";

const Header = () => {
  const userCtx = useContext(userContext);

  return (
    <React.Fragment>
      {userCtx.loginStatus && (
        <span className={css.loggedInUser}>
          Welcome,{" "}
          {userCtx.name.charAt(0).toUpperCase() + userCtx.name.slice(1)} -&nbsp;{" "}
          {"  "}
          <Link to="/logout"> Logout</Link>
        </span>
      )}
      <div className={css.header}>
        <Nav />
      </div>
    </React.Fragment>
  );
};

export default Header;
=======
import React, { useContext } from "react";
import Nav from "./nav";
import css from "./header.module.css";
import userContext from "../store/user-context";
import { Link } from "react-router-dom";

const Header = () => {
  const userCtx = useContext(userContext);

  return (
    <React.Fragment>
      {userCtx.loginStatus && (
        <span className={css.loggedInUser}>
          Welcome,{" "}
          {userCtx.name.charAt(0).toUpperCase() + userCtx.name.slice(1)} -&nbsp;{" "}
          {"  "}
          <Link to="/logout"> Logout</Link>
        </span>
      )}
      <div className={css.header}>
        <Nav />
      </div>
    </React.Fragment>
  );
};

export default Header;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)

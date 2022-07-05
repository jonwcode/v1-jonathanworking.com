import React, { useReducer, useState, useContext } from "react";
import css from "./login.module.css";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import { ReactComponent as HomeSVG } from "../assets/svg/home-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import HrLine from "../components/hrLine";
import userContext from "../store/user-context";

const Login = () => {
  const userCtx = useContext(userContext);

  const Navigate = useNavigate();

  const [loginContainerClass, setLoginContainerClass] = useState(
    `${css.loginContainer}`
  );

  const reducer = (state, action) => {
    if (action.type === "name") {
      const regex = /[^a-zA-Z0-9]/;

      return {
        ...state,
        name: action.val,
        validName:
          action.val.length >= 2 && !action.val.match(regex) ? true : false,
        nameClass: !action.val.match(regex) ? null : `${css.borderError}`,
      };
    } else if (action.type === "pass") {
      return {
        ...state,
        pass: action.val,
        validPass: action.val.length >= 5 ? true : false,
        passClass: action.val.length >= 5 ? null : null,
      };
    } else if (action.type === "error-input-name") {
      return { ...state, nameClass: `${css.borderError}` };
    } else if (action.type === "error-input-pass") {
      return { ...state, passClass: `${css.borderError}` };
    }

    if (action.type === "invalidLoginAttempt") {
      return { ...state, showError: true };
    }
  };

  const initialState = {
    name: "",
    pass: "",
    validName: false,
    validPass: false,
    nameClass: null,
    passClass: null,
    showError: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleErrors();

    if (state.validName && state.validPass) {
      // If the username and password meet the requirements
      // go ahead and login
      setLoginContainerClass(`${css.loginContainer} ${css.loading}`);

      fetch("/api/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((req) => {
          return req.json();
        })
        .then((res) => {
          setTimeout(() => {
            handleLogin(res);
          }, 200);
        });
    }
  };

  const handleLogin = (res) => {
    if (res.success === true) {
      // If it's a valid user, set the
      Navigate("/projects");

      userCtx.setUser({
        name: res.name,
        userID: res.userID,
        token: res.token,
        permissions: res.permissions,
        loginStatus: true,
      });
    } else {
      dispatch({ type: "invalidLoginAttempt" });
      setLoginContainerClass(`${css.loginContainer} ${css.shakeEffect}`);
      setTimeout(() => {
        setLoginContainerClass(`${css.loginContainer}`);
      }, 210);
    }
  };

  const handleErrors = () => {
    const regex = /[^a-zA-Z0-9]/;

    if (state.name.length < 2 || state.name.match(regex)) {
      dispatch({ type: "error-input-name" });
    }

    if (state.name.length < 2 || state.name.match(regex)) {
      dispatch({ type: "error-input-pass" });
    }
  };

  const handleGuestLogin = () => {
    //alert("Logining in as guest.");

    setLoginContainerClass(`${css.loginContainer} ${css.loading}`);

    const guestUser = { name: "guest" };

    fetch("/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guestUser),
    })
      .then((req) => {
        return req.json();
      })
      .then((res) => {
        setTimeout(() => {
          handleLogin(res);
        }, 200);
      });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - Log In</title>
      </Helmet>
      <div className={css.loginHeader}>
        <Link to="/">
          <HomeSVG width="35" className={css.homeSVG} />
        </Link>
      </div>

      <div className={css.wrapper}>
        <div className={css.content}>
          {state.showError && (
            <span className={css.errMsg}>Invalid username/Password</span>
          )}
          <span className={css.headerText}>Portfolio Log In</span>
          <div className={loginContainerClass}>
            <div className={css.inputFields}>
              <form onSubmit={handleSubmit}>
                <span className={css.field}>Username</span>
                <input
                  name="name"
                  className={state.nameClass}
                  onChange={(evt) =>
                    dispatch({ type: "name", val: evt.target.value })
                  }
                  value={state.name}
                  type="text"
                  placeholder="username"
                />
                <span value={state.pass} className={css.field}>
                  Password
                </span>
                <input
                  name="pass"
                  className={state.passClass}
                  onChange={(evt) =>
                    dispatch({ type: "pass", val: evt.target.value })
                  }
                  value={state.pass}
                  type="password"
                  placeholder="Password"
                />
                <button type="submit">Log In</button>
              </form>
              <HrLine />
              <button
                onClick={handleGuestLogin}
                name="guest"
                className={css.guestBtn}
              >
                Guest Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;

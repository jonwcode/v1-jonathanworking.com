import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import ContactMe from "./pages/contact";
import Login from "./pages/login";
import userContext from "./store/user-context";
import Logout from "./components/logout";

function App() {
  const userCtx = useContext(userContext);

  const [ready, setReady] = useState(false);

  // // const [ready, setReady] = useState(false);

  useEffect(() => {
    // Promise.all([userCtx.checkLoginStatusReady()]).then(() => {
    //   setReady(true);
    //   // console.log(userCtx.loginStatus, "Login Status");
    // });
    if (userCtx.checkLoginStatusReady === true) {
      setReady(true);
    }
  }, [userCtx]);

  //
  // });

  return (
    <React.Fragment>
      {ready && (
        <Routes>
          {!userCtx.loginStatus && (
            <Route path="/login" exact element={<Login />} />
          )}
          {userCtx.loginStatus && (
            <Route path="/logout" exact element={<Logout />} />
          )}
          <Route path="/contact" exact element={<ContactMe />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      )}
    </React.Fragment>
  );
}

export default App;

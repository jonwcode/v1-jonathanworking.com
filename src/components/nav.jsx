import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import css from "./nav.module.css";
import { ReactComponent as NewLinkSVG } from "../assets/svg/up-right-from-square-solid.svg";

const Nav = () => {
  const location = useLocation();

  const path = location.pathname;

  return (
    <nav>
      <ul>
        <li className={path === "/" ? css.active : ""}>
          <NavLink className={() => (path === "/" ? css.active : "")} to="/">
            Home
          </NavLink>
        </li>
        <li className={path === "/about" ? css.active : ""}>
          <NavLink
            className={() => (path === "/about" ? css.active : "")}
            to="/about"
          >
            About me
          </NavLink>
        </li>
        <li className={() => (path === "/projects" ? css.active : "")}>
          <NavLink
            className={() => (path === "/projects" ? css.active : "")}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a target="_blank" href="https://github.com/jonwcode/">
            Github Ropo
            <NewLinkSVG
              width="20"
              style={{ marginLeft: "10px", fill: "#ccc" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

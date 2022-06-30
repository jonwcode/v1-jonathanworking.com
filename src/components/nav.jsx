import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./nav.module.css";
import { ReactComponent as GitHubSVG } from "../assets/svg/githubSVG.svg";
import MobileNav from "./mobileNav";
import { navLeftLinks } from "../navLinks";

const Nav = () => {
  const location = useLocation();

  const path = location.pathname;

  const handleActiveLink = ({ isActive }) => {
    if (isActive) {
      return css.active;
    }
  };

  return (
    <React.Fragment>
      <nav className={css.navLeft}>
        <ul>
          {navLeftLinks.map((links, indx) => (
            <li key={indx}>
              <NavLink className={handleActiveLink} to={links.path}>
                {links.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {path !== "/" && (
        <nav className={css.navRight}>
          <li style={{ border: "0px" }}>
            <a
              href="https://github.com/jonwcode/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubSVG width="30" className={css.gitHubSVG} height="30" />
            </a>
          </li>
        </nav>
      )}
      <MobileNav />
    </React.Fragment>
  );
};

export default Nav;

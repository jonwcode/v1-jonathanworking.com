import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./nav.module.css";
import { ReactComponent as NewLinkSVG } from "../assets/svg/up-right-from-square-solid.svg";
import MobileNav from "./mobileNav";
import { navLeftLinks } from "../navLinks";

const Nav = () => {
  const location = useLocation();

  const path = location.pathname;

  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [mobileBtnClasses, setMobileBtnClasses] = useState(
    `${css.mobileNavBtn}`
  );

  const handleActiveLink = ({ isActive }) => {
    if (isActive) {
      return css.active;
    }
  };

  const handleToggleMobileNav = () => {
    setToggleMobileNav((prev) => {
      if (prev === false) {
        setMobileBtnClasses(` ${css.mobileNavBtn} ${css.closeMobileBtn}`);
      } else {
        setMobileBtnClasses(`${css.mobileNavBtn}`);
      }

      return !prev;
    });
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
      <nav className={css.navRight}>
        <li>
          <a target="_blank" href="https://github.com/jonwcode/">
            My Github Ropo
            <NewLinkSVG
              width="20"
              style={{
                marginLeft: "10px",
                fill: "#ccc",
                position: "relative",
                top: "3px",
              }}
            />
          </a>
        </li>
      </nav>
      <span
        className={css.mobileNavBtnContainer}
        onClick={handleToggleMobileNav}
      >
        <span className={mobileBtnClasses}></span>
      </span>
      <MobileNav show={toggleMobileNav} setShow={setToggleMobileNav} />
    </React.Fragment>
  );
};

export default Nav;

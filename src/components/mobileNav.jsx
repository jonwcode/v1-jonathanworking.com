<<<<<<< HEAD
import React, { useState, useContext } from "react";
import { navLeftLinks, AuthLinks } from "../navLinks";
import css from "./mobileNav.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LeaveSVG } from "../assets/svg/leave.svg";
import userContext from "../store/user-context";

const MobileNav = () => {
  const userCtx = useContext(userContext);

  const navLinks = !userCtx.loginStatus ? navLeftLinks : AuthLinks;

  const [checkedState, setCheckedState] = useState(false);
  const [navMenuClasses, setNavMenuClasses] = useState(
    `${css.navMenu} ${css.initialHideMenu}`
  );

  const toggleCheckBox = () => {
    setCheckedState((prev) => !prev);

    if (!checkedState) {
      setNavMenuClasses(`${css.navMenu}`);
      document.body.style.cssText = "overflow:hidden";
    } else {
      document.body.removeAttribute("style");
    }
  };

  return (
    <div id={css["main-menu"]}>
      <input
        type="checkbox"
        checked={checkedState}
        onChange={toggleCheckBox}
        className={css.mobileCheckBox}
      />
      <span className={css.mobileNavBtnContainer}>
        <span className={css.mobileNavBtn}></span>
      </span>
      <div onClick={toggleCheckBox} className={css.overlay}></div>
      <div className={navMenuClasses}>
        <div className={css.linkWrapper}>
          {navLinks.map((link, indx) => (
            <span key={indx}>
              <Link onClick={toggleCheckBox} to={link.path}>
                {link.name}
              </Link>
            </span>
          ))}
          <span>
            <a
              href="https://github.com/jonwcode"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <LeaveSVG className={css.leaveSVG} width="25" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
=======
import React, { useState, useContext } from "react";
import { navLeftLinks, AuthLinks } from "../navLinks";
import css from "./mobileNav.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LeaveSVG } from "../assets/svg/leave.svg";
import userContext from "../store/user-context";

const MobileNav = () => {
  const userCtx = useContext(userContext);

  const navLinks = !userCtx.loginStatus ? navLeftLinks : AuthLinks;

  const [checkedState, setCheckedState] = useState(false);
  const [navMenuClasses, setNavMenuClasses] = useState(
    `${css.navMenu} ${css.initialHideMenu}`
  );

  const toggleCheckBox = () => {
    setCheckedState((prev) => !prev);

    if (!checkedState) {
      setNavMenuClasses(`${css.navMenu}`);
      document.body.style.cssText = "overflow:hidden";
    } else {
      document.body.removeAttribute("style");
    }
  };

  return (
    <div id={css["main-menu"]}>
      <input
        type="checkbox"
        checked={checkedState}
        onChange={toggleCheckBox}
        className={css.mobileCheckBox}
      />
      <span className={css.mobileNavBtnContainer}>
        <span className={css.mobileNavBtn}></span>
      </span>
      <div onClick={toggleCheckBox} className={css.overlay}></div>
      <div className={navMenuClasses}>
        <div className={css.linkWrapper}>
          {navLinks.map((link, indx) => (
            <span key={indx}>
              <Link onClick={toggleCheckBox} to={link.path}>
                {link.name}
              </Link>
            </span>
          ))}
          <span>
            <a
              href="https://github.com/jonwcode"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <LeaveSVG className={css.leaveSVG} width="25" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)

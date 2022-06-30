import React, { useState } from "react";
import { navLeftLinks } from "../navLinks";
import css from "./mobileNav.module.css";
import { Link } from "react-router-dom";
import Portal from "./portal";
import { ReactComponent as LeaveSVG } from "../assets/svg/leave.svg";

const MobileNav = () => {
  const [checkedState, setCheckedState] = useState(false);

  const toggleCheckBox = () => {
    setCheckedState((prev) => !prev);

    if (!checkedState) {
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
        onClick={toggleCheckBox}
        className={css.mobileCheckBox}
      />
      <span className={css.mobileNavBtnContainer}>
        <span className={css.mobileNavBtn}></span>
      </span>
      <div onClick={toggleCheckBox} className={css.overlay}></div>
      <div className={css.navMenu}>
        <div className={css.linkWrapper}>
          {navLeftLinks.map((link, indx) => (
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

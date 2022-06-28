import React, { useEffect } from "react";
import { navLeftLinks } from "../navLinks";
import css from "./mobileNav.module.css";
import { Link } from "react-router-dom";
import Overlay from "./overlay";

const MobileNav = ({ show }) => {
  return (
    <React.Fragment>
      {show && (
        <>
          <Overlay />
          <div className={css.navMenu}>
            {navLeftLinks.map((link, indx) => (
              <Link key={indx} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default MobileNav;

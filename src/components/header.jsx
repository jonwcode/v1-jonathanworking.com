import React from "react";
import Nav from "./nav";
import css from "./header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Nav />
    </div>
  );
};

export default Header;

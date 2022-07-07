import React from "react";
import Portal from "./portal";
import css from "./loadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <Portal>
      <div className={css.overlay}></div>
    </Portal>
  );
};

export default LoadingScreen;

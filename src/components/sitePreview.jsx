import React, { useState, useRef } from "react";
import css from "./sitePreview.module.css";

const SitePreview = ({ url }) => {
  const [coverClass, setCoverClass] = useState(`${css.cover} ${css.loading}`);
  const iframe = useRef();

  const handleLoad = () => {
    setTimeout(() => {
      setCoverClass(`${css.cover}`);
    }, 1200);
  };

  return (
    <div className={css.iframeContainer}>
      <span className={coverClass}>Loading...</span>
      <iframe
        ref={iframe}
        onLoad={handleLoad}
        className={css.iframe}
        src={url}
        scrolling="no"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default SitePreview;

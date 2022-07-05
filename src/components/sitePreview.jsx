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
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className={coverClass}>Loading...</span>
      </a>
      <iframe
        ref={iframe}
        onLoad={handleLoad}
        className={css.iframe}
        src={url}
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default SitePreview;

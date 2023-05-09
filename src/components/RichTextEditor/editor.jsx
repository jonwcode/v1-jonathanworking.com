<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import css from "./editor.module.css";

const Editor = ({ html, handleChange, placeholder, desClass }) => {
  const [className, setClassName] = useState(`${css.editor}`);
  const contenteditableRef = useRef("");

  const handleCmd = (evt, cmd) => {
    evt.preventDefault();
    document.execCommand(cmd);

    setTimeout(() => {
      contenteditableRef.current.focus();
    }, 200);
  };

  useEffect(() => {
    setClassName(desClass ? `${css.editorErr}` : `${css.editor}`);
  }, [desClass]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);

  const handleKeyEvent = (evt) => {
    const key = evt.key;

    if (key === "Enter") {
      if (document.queryCommandState("bold")) {
        document.execCommand("bold");
        return false;
      }
    }
  };

  return (
    <div className={css.editorWrapper}>
      <div className={css.cmdContainer}>
        <button
          className={
            document.queryCommandState("bold") ? `${css.activeBtn}` : ""
          }
          onClick={(evt) => handleCmd(evt, "bold")}
        >
          Header
        </button>
        <button
          className={
            document.queryCommandState("insertUnorderedList")
              ? `${css.activeBtn}`
              : ""
          }
          onClick={(evt) => handleCmd(evt, "insertUnorderedList")}
        >
          Unordered List
        </button>
      </div>
      <ContentEditable
        html={html}
        innerRef={contenteditableRef}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
=======
import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import css from "./editor.module.css";

const Editor = ({ html, handleChange, placeholder, desClass }) => {
  const [className, setClassName] = useState(`${css.editor}`);
  const contenteditableRef = useRef("");

  const handleCmd = (evt, cmd) => {
    evt.preventDefault();
    document.execCommand(cmd);

    setTimeout(() => {
      contenteditableRef.current.focus();
    }, 200);
  };

  useEffect(() => {
    setClassName(desClass ? `${css.editorErr}` : `${css.editor}`);
  }, [desClass]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);

  const handleKeyEvent = (evt) => {
    const key = evt.key;

    if (key === "Enter") {
      if (document.queryCommandState("bold")) {
        document.execCommand("bold");
        return false;
      }
    }
  };

  return (
    <div className={css.editorWrapper}>
      <div className={css.cmdContainer}>
        <button
          className={
            document.queryCommandState("bold") ? `${css.activeBtn}` : ""
          }
          onClick={(evt) => handleCmd(evt, "bold")}
        >
          Header
        </button>
        <button
          className={
            document.queryCommandState("insertUnorderedList")
              ? `${css.activeBtn}`
              : ""
          }
          onClick={(evt) => handleCmd(evt, "insertUnorderedList")}
        >
          Unordered List
        </button>
      </div>
      <ContentEditable
        html={html}
        innerRef={contenteditableRef}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)

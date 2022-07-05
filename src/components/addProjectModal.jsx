import React, { useReducer, useState } from "react";
import css from "./addProjectModal.module.css";
import { ReactComponent as XMark } from "../assets/svg/xmark-solid.svg";
import Editor from "./RichTextEditor/editor";

const AddProjectModal = ({ toggle, setList }) => {
  const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  const [submitBtnText, setSubmitBtnText] = useState("Add Project");

  const reducer = (state, action) => {
    if (action.type === "url") {
      return {
        ...state,
        url: action.val,
        validURL: action.val.length >= 10 ? true : false,
        urlClass: "",
      };
    }

    if (action.type === "gitHub_repo") {
      return {
        ...state,
        gitHub_repo: action.val,
        validGibHub: action.val.length >= 10 ? true : false,
        gitHubClass: "",
      };
    }

    if (action.type === "des") {
      return {
        ...state,
        des: action.val,
        validDes: action.val.length >= 20 ? true : false,
        desClass: "",
      };
    }

    // Handle the input errors

    if (action.type === "input-url-err") {
      return {
        ...state,
        urlClass:
          state.url.length < 10 || !state.url.match(urlRegex)
            ? `${css.inputError}`
            : "",
      };
    }

    if (action.type === "input-gitHub-err") {
      return {
        ...state,
        gitHubClass:
          state.gitHub_repo.length < 10 || !state.gitHub_repo.match(urlRegex)
            ? `${css.inputError}`
            : "",
      };
    }

    if (action.type === "input-des-err") {
      return {
        ...state,
        desClass: state.des.length < 20 ? true : false,
      };
    }

    if (action.type === "url-err-msg") {
      return {
        ...state,
        urlErrMsg:
          state.url.length > 0 && !state.url.match(urlRegex) ? true : false,
        validURL: state.url.match(urlRegex) ? true : false,
      };
    }

    if (action.type === "gitHub-repo-err") {
      return {
        ...state,
        gitHubErrMsg:
          state.gitHub_repo.length > 0 && !state.gitHub_repo.match(urlRegex)
            ? true
            : false,

        validGibHub: state.gitHub_repo.match(urlRegex) ? true : false,
      };
    }
  };

  const initialState = {
    url: "",
    des: "",
    gitHub_repo: "",
    validGibHub: false,
    validURL: false,
    validDes: false,
    urlClass: "",
    desClass: "",
    gitHubClass: "",
    urlErrMsg: false,
    gitHubErrMsg: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleErrors = (checkUrl = false) => {
    if (checkUrl === false) {
      console.log(state.url);
      // Error checking for site URL

      dispatch({ type: "input-url-err" });

      dispatch({ type: "url-err-msg" });

      // Error checking for GitHub Repo

      dispatch({ type: "input-gitHub-err" });

      dispatch({ type: "gitHub-repo-err" });

      // Check for errors for description

      dispatch({ type: "input-des-err" });
    } else {
      // Again check errors for url and GitHub
      // onBlur

      dispatch({ type: "url-err-msg" });

      dispatch({ type: "gitHub-repo-err" });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSubmitBtnText("Loading...");

    handleErrors();

    if (state.validURL && state.validGibHub && state.validDes) {
      alert("made it here");
      const project = {
        url: state.url,
        gitHub_repo: state.gitHub_repo,
        des: state.des,
      };

      const req = await fetch("/api/addProject.php", {
        method: "POST",
        headers: {
          "Content-Type": "appliaction/json",
        },
        body: JSON.stringify(project),
      });

      const res = await req.text();

      // Go ahead and add the project

      setList((prev) => {
        return [
          {
            url: state.url,
            des: state.des,
            gitHub_repo: state.gitHub_repo,
          },
          ...prev,
        ];
      });
    }

    setSubmitBtnText("Add Project");
  };

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if (name === "url") {
      dispatch({ type: "url", val: value });
    }

    if (name === "gitHub_repo") {
      dispatch({ type: "gitHub_repo", val: value });
    }
  };

  const handleDesChange = (evt) => {
    const value = evt.target.value;

    dispatch({ type: "des", val: value });
  };

  return (
    <React.Fragment>
      <div onClick={toggle} className={css.overlay}></div>
      <form onSubmit={handleSubmit}>
        <div className={css.container}>
          <span className={css.xmark} onClick={toggle}>
            <XMark />
          </span>
          <span className={css.headerText}>Add Project</span>

          <span className={css.field}>Project URL</span>

          <input
            name="url"
            onChange={handleChange}
            onBlur={() => handleErrors(true)}
            value={state.url}
            type="text"
            placeholder="Enter Project URL"
            className={state.urlClass}
          />
          {state.urlErrMsg && (
            <div className={css.errMsgContainer}>
              <i className={css.exclamation}></i>
              <span className={css.errMsg}>Must be a valid URL</span>
            </div>
          )}

          <span className={css.field}>GitHub Repo</span>

          <input
            name="gitHub_repo"
            onChange={handleChange}
            value={state.gitHub_repo}
            onBlur={() => handleErrors(true)}
            type="text"
            placeholder="Enter GitHub Repo URL"
            className={state.gitHubClass}
          />
          {state.gitHubErrMsg && (
            <div className={css.errMsgContainer}>
              <i className={css.exclamation}></i>
              <span className={css.errMsg}>Must be a valid URL</span>
            </div>
          )}
          <span className={css.field}>Project Description</span>
          <Editor
            desClass={state.desClass}
            handleChange={handleDesChange}
            placeholder="Project description"
            className={state.desClass}
            html={state.des}
          />
          {/* <textarea
            name="des"
            onChange={handleChange}
            value={state.des}
            placeholder="Project description"
            className={state.desClass}
          ></textarea> */}
          <button className={css.addNewProjectBtn} type="submit">
            {submitBtnText}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddProjectModal;

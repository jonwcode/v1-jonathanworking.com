import React, { useReducer, useState, useEffect } from "react";
import css from "./addProjectModal.module.css";
import { ReactComponent as XMark } from "../assets/svg/xmark-solid.svg";
import Editor from "./RichTextEditor/editor";

const EditProjectModal = ({ toggle, setList, list, project }) => {
  const urlRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  const [submitBtnText, setSubmitBtnText] = useState("Edit Project");

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
      const validURL =
        state.url.length > 0 && !state.url.match(urlRegex) ? true : false;

      console.log(validURL, "I'm running this here");

      return {
        ...state,
        urlErrMsg: { show: validURL, msg: "Must be a valid URL" },
        urlClass: state.url.length === 0 || validURL ? `${css.inputError}` : "",
        validURL: state.url.match(urlRegex) ? true : false,
      };
    }

    if (action.type === "gitHub-repo-err") {
      const validURL =
        state.gitHub_repo.length > 0 && !state.gitHub_repo.match(urlRegex)
          ? true
          : false;

      return {
        ...state,
        gitHubErrMsg: validURL,
        gitHubClass:
          state.gitHub_repo.length === 0 || validURL ? `${css.inputError}` : "",
        validGibHub: state.url.match(urlRegex) ? true : false,
      };
    }

    if (action.type === "checkDup" && state.validURL) {
      console.log(getHostname(state.url));

      const checkDup = list.some(
        (obj) => getHostname(obj.url) === getHostname(state.url)
      );
      console.log(checkDup);
      return {
        ...state,
        projectAlreadyExisit: checkDup,
        urlErrMsg: {
          show: checkDup,
          msg: "This project has already been entered.",
        },
        urlClass: checkDup ? `${css.inputError}` : "",
      };
    } else {
      return { ...state };
    }
  };

  const getHostname = (url) => {
    const { hostname } = new URL(url);

    const host = hostname.replace("www.", "");

    return host;
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
    projectAlreadyExisit: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleErrors = (checkInput = false) => {
    if (checkInput === false) {
      // Error checking for site URL

      dispatch({ type: "input-url-err" });

      dispatch({ type: "url-err-msg" });

      // Check to make sure the project url isn't
      // A duplicate

      dispatch({ type: "checkDup" });

      // Error checking for GitHub Repo

      dispatch({ type: "input-gitHub-err" });

      dispatch({ type: "gitHub-repo-err" });

      // Check for errors for description

      dispatch({ type: "input-des-err" });
    }

    // Again check errors for url and GitHub Dup
    // onBlur

    if (checkInput === "url") dispatch({ type: "url-err-msg" });
    if (checkInput === "url") dispatch({ type: "checkDup" });
    if (checkInput === "gitHub_repo") dispatch({ type: "gitHub-repo-err" });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSubmitBtnText("Loading...");

    //handleErrors();

    if (state.validURL && state.validGibHub && state.validDes) {
      //   const project = {
      //     url: state.url,
      //     gitHub_repo: state.gitHub_repo,
      //     des: state.des,
      //   };
      //   await fetch("/api/addProject.php", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "appliaction/json",
      //     },
      //     body: JSON.stringify(project),
      //   });
      //console.log("Going here");

      // WE NEED TO UPDATE THE SERVER STILL.... GOING TO BED

      console.log(list, project);

      const projectList = [...list];

      const index = projectList.findIndex((arr) => arr.id === project.id);

      projectList[index].url = state.url;
      projectList[index].gitHub_repo = state.gitHub_repo;
      projectList[index].des = state.des;

      setList(projectList);

      toggle(false);
      setSubmitBtnText("Edit Project");
    }
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

  useEffect(() => {
    dispatch({ type: "url", val: project.url });
    dispatch({ type: "gitHub_repo", val: project.gitHub_repo });
    dispatch({ type: "des", val: project.des });
  }, []);

  return (
    <React.Fragment>
      <div onClick={toggle} className={css.overlay}></div>
      <form onSubmit={handleSubmit}>
        <div className={css.container}>
          <span className={css.xmark} onClick={() => toggle(false)}>
            <XMark />
          </span>
          <span className={css.headerText}>Edit Project</span>

          <span className={css.field}>Project URL</span>

          <input
            name="url"
            onChange={handleChange}
            onBlur={() => handleErrors("url")}
            value={state.url}
            type="text"
            placeholder="Enter Project URL"
            className={state.urlClass}
          />
          {state.urlErrMsg.show && (
            <div className={css.errMsgContainer}>
              <i className={css.exclamation}></i>
              <span className={css.errMsg}>{state.urlErrMsg.msg}</span>
            </div>
          )}

          <span className={css.field}>GitHub Repo</span>

          <input
            name="gitHub_repo"
            onChange={handleChange}
            value={state.gitHub_repo}
            onBlur={() => handleErrors("gitHub_repo")}
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

export default EditProjectModal;

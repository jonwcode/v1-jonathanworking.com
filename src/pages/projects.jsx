import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Header from "../components/header";
import css from "./projects.module.css";
import userContext from "../store/user-context";
import { ReactComponent as PlusSVG } from "../assets/svg/plus-solid.svg";
import AddProjectModal from "../components/addProjectModal";
import ProjectList from "../components/projectList";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { url: "https://www.vocabularygeek.com", des: "lajfladjsfadlsjkf" },
      { url: "https://isayy.com", des: "lajfladjsfadlsjkf" },
      { url: "https://perucomputercenter.com", des: "lajfladjsfadlsjkf" },
    ]);
  }, []);

  const handleToggleModal = () => {
    console.log("it's going here");
    setShowModal((prev) => !prev);
  };

  const userCtx = useContext(userContext);

  return (
    <React.Fragment>
      {showModal && (
        <AddProjectModal setList={setList} toggle={handleToggleModal} />
      )}
      <Helmet>
        <title>Jonathan Working - Projects</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        {userCtx.loginStatus && (
          <div className={css.projectContainer}>
            <button
              onClick={handleToggleModal}
              className={css.addNewProjectBtn}
            >
              <PlusSVG className={css.plusSVG} />{" "}
              <span className={css.btnText}>Add Project</span>
            </button>
          </div>
        )}
        <div className={css.content}>{<ProjectList list={list} />}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;

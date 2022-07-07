import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Header from "../components/header";
import css from "./projects.module.css";
import userContext from "../store/user-context";
import { ReactComponent as PlusSVG } from "../assets/svg/plus-solid.svg";
import AddProjectModal from "../components/addProjectModal";
import ProjectList from "../components/projectList";
import { async } from "q";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const fetchProjects = async () => {
    const req = await fetch("/api/projects.php");

    const res = await req.json();

    setList(res);
  };

  useEffect(() => {
    fetchProjects();

    // setList([
    //   { url: "https://www.vocabularygeek.com", des: "lajfladjsfadlsjkf" },
    //   { url: "https://isayy.com", des: "lajfladjsfadlsjkf" },
    //   { url: "https://perucomputercenter.com", des: "lajfladjsfadlsjkf" },
    // ]);
  }, []);

  const handleToggleModal = () => {
    console.log("it's going here");
    setShowModal((prev) => !prev);
  };

  const userCtx = useContext(userContext);

  return (
    <React.Fragment>
      {showModal && (
        <AddProjectModal
          list={list}
          setList={setList}
          toggle={handleToggleModal}
        />
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
        <div className={css.content}>
          {<ProjectList setList={setList} list={list} />}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;

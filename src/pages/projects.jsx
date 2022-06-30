import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Header from "../components/header";
import css from "./projects.module.css";

const Projects = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - Projects</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        <div className={css.content}></div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;

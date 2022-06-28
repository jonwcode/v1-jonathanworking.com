import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";

const Projects = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - About</title>
      </Helmet>
      <Header />
      <h1>Projects</h1>
    </React.Fragment>
  );
};

export default Projects;

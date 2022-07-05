import React from "react";
import SitePreview from "./sitePreview";
import css from "./projectList.module.css";

const ProjectList = ({ list }) => {
  return (
    <div className={css.container}>
      {list.map((project, index) => (
        <div key={index} className={css.projectContainer}>
          <SitePreview url={project.url} />
          <a href={project.url}>{project.url}</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

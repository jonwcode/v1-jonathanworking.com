import React, { useContext, useState, useRef } from "react";
import SitePreview from "./sitePreview";
import ConfirmActionModal from "./confirmActionModal";
import css from "./projectList.module.css";
import userContext from "../store/user-context";
import EditProjectModal from "./editProjectModal";
import { ReactComponent as TrashIcon } from "../assets/svg/trashIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/edit-solid.svg";

const ProjectList = ({ list, setList }) => {
  const [delProject, setDelProject] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchedProject, setFetchedProject] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const userCtx = useContext(userContext);
  const [showConfirmModal, setConfirmModal] = useState(false);

  const handleDelete = async () => {
    setConfirmModal(false);

    // Now we can first remove it from the
    // Current array by...

    const updatedList = list.filter((list) => list.id !== delProject);

    // Now update the state

    setList(updatedList);

    // Now notify the server

    const data = { id: delProject };

    const req = await fetch("/api/delProject.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await req.text();

    console.log(res);
  };

  const handleConfirmAction = (id) => {
    // Store the project id for if the user deletes the project
    setDelProject(id);
    setConfirmModal((prev) => !prev);
  };

  const handleEdit = async (id) => {
    const data = { id: id };

    const index = list.findIndex((obj) => obj.id === id);

    const project = list[index];

    const obj = {
      url: project.url,
      gitHub_repo: project.gitHub_repo,
      des: project.des,
      id: project.id,
    };

    console.log(obj);

    setFetchedProject(obj);

    setShowEditModal(true);
  };

  return (
    <React.Fragment>
      {showEditModal && (
        <EditProjectModal
          list={list}
          setList={setList}
          toggle={setShowEditModal}
          project={fetchedProject}
        />
      )}
      {showConfirmModal && (
        <ConfirmActionModal run={handleDelete} toggle={handleConfirmAction}>
          Are you sure you want to delete this project?
        </ConfirmActionModal>
      )}
      <div className={css.container}>
        {list.map((project, index) => (
          <div key={index} className={css.projectContainer}>
            <div className={css.projectRows}>
              <SitePreview url={project.url} />
              <div className={css.linkContainer}>
                <span className={css.button}>
                  <a href={project.url}>Live Site</a>
                </span>
                <span data-tip="container" className={css.buttonSource}>
                  <a href={project.gitHub_repo}>Source</a>
                </span>
              </div>
              <div className={css.desContainer}>
                <span dangerouslySetInnerHTML={{ __html: project.des }}></span>
              </div>
              {userCtx.loginStatus && userCtx.permissions >= 1 && (
                <div className={css.adminControls}>
                  Admin Controls:{" "}
                  <span className={css.svgIcon} data-tip="Delete">
                    <TrashIcon
                      className={css.trashIcon}
                      onClick={() => handleConfirmAction(project.id)}
                    />
                  </span>
                  {" | "}
                  <span
                    className={css.svgIcon}
                    onClick={() => handleEdit(project.id)}
                    data-tip="Edit"
                  >
                    <EditIcon className={css.editIcon} />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProjectList;

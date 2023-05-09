<<<<<<< HEAD
import React from "react";
import Portal from "./portal";
import css from "./confirmActionModal.module.css";

const ConfirmActionModal = ({ run, children, toggle }) => {
  return (
    <Portal>
      <div className={css.overlay}></div>
      <div className={css.msgBox}>
        <span className={css.msg}>{children}</span>
        <div className={css.actions}>
          <button className={css.confirm} onClick={run}>
            Confirm
          </button>
          <button className={css.cancel} onClick={toggle}>
            Cancel
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default ConfirmActionModal;
=======
import React from "react";
import Portal from "./portal";
import css from "./confirmActionModal.module.css";

const ConfirmActionModal = ({ run, children, toggle }) => {
  return (
    <Portal>
      <div className={css.overlay}></div>
      <div className={css.msgBox}>
        <span className={css.msg}>{children}</span>
        <div className={css.actions}>
          <button className={css.confirm} onClick={run}>
            Confirm
          </button>
          <button className={css.cancel} onClick={toggle}>
            Cancel
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default ConfirmActionModal;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)

<<<<<<< HEAD
import ReactDOM from "react-dom";

const Overlay = ({ children }) => {
  // ReactDOM.createPortal(
  //     this.props.children,
  //     domNode
  //   );

  return ReactDOM.createPortal(children, document.getElementById("root"));
};

export default Overlay;
=======
import ReactDOM from "react-dom";

const Overlay = ({ children }) => {
  // ReactDOM.createPortal(
  //     this.props.children,
  //     domNode
  //   );

  return ReactDOM.createPortal(children, document.getElementById("root"));
};

export default Overlay;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)

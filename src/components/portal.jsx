import ReactDOM from "react-dom";

const Overlay = ({ children }) => {
  // ReactDOM.createPortal(
  //     this.props.children,
  //     domNode
  //   );

  return ReactDOM.createPortal(children, document.getElementById("root"));
};

export default Overlay;

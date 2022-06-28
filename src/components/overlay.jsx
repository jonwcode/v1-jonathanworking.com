import React from "react";
import ReactDOM from "react-dom";

const Overlay = ({ style }) => {
  // ReactDOM.createPortal(
  //     this.props.children,
  //     domNode
  //   );

  return ReactDOM.createPortal(
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.429)",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        ...style,
      }}
    ></div>,
    document.getElementById("root")
  );
};

export default Overlay;

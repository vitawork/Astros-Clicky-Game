import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div id="won" className="wrapper">
      {props.children}
    </div>
  );
}

export default Wrapper;

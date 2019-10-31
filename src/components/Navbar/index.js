import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav class="navbar">
      <ul>
        <li class="brand">
          <a href="#">Astros Clicky Game!</a>
        </li>
        <li id="mes" class=""></li>
        <li>
          Score: {props.score} | Top Score: {props.topscore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

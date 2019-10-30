import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav class="navbar">
      <ul>
        <li class="brand">
          <a href="https://clicky-game.netlify.com/">Clicky Game!</a>
        </li>
        <li class="">Click an image to begin!</li>
        <li>Score: {props.score} | Top Score: {props.topscore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;

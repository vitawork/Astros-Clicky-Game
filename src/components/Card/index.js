import React from "react";
import "./style.css";

function Card(props) {
  return (
      <div role="img" aria-label="click item" class="click-item" >
        
        <img id="playerimg" alt={props.name} src={props.image}  onClick={() => props.clickCard()}/>
        <div id='foot'  onClick={() => props.clickCard()}>
          {props.name} #{props.num}
        </div>
        <a href={props.info}>Info...</a>
      </div>
    
  );
}

export default Card;

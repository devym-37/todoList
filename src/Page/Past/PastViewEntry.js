import React from "react";

const PastViewEntry = props => (
  <div>
    <div className="todolist">
      <div className="textbox">{props.complete === true ? props.text : ""}</div>
    </div>
  </div>
);

export default PastViewEntry;

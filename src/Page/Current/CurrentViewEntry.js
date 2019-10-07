import React from "react";

const CurrentViewEntry = props => (
  <div>
    <div className="todolist">
      <div className="textbox">{props.complete !== true ? props.text : ""}</div>
    </div>
  </div>
);

export default CurrentViewEntry;

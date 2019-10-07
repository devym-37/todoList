import React from "react";

const CurrentViewEntry = ({ text, complete, removeTodo, value }) => (
  <div>
    <div className="todolist">
      <div className="textbox">{complete !== true ? text : ""}</div>
      <button className="textBtn" onClick={() => removeTodo(value)}>
        🎁
      </button>
    </div>
  </div>
);

export default CurrentViewEntry;

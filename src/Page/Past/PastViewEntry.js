import React from "react";

const PastViewEntry = ({ text, complete, value, reTodo }) => (
  <div>
    <div className="todolist">
      <div className="textbox">{complete === true ? text : ""}</div>
      <button className="textBtn" onClick={() => reTodo(value)}>
        🏆
      </button>
    </div>
  </div>
);

export default PastViewEntry;

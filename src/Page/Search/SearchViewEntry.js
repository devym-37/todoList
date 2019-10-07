import React from "react";

const SearchViewEntry = ({ text, complete, onChange }) => (
  <div>
    <div className="todolist">
      <div className="textbox">{text}</div>
    </div>
  </div>
);

export default SearchViewEntry;

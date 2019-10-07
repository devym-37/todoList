import React from "react";

const SearchViewEntry = ({ todoText, complete, onChange, addTodo }) => (
  <div>
    <input
      className="input"
      type="text"
      placeholder="Search Todo"
      value={todoText}
      onChange={onChange}
      onKeyDown={e => (e.keyCode === 13 ? addTodo : null)}
    />

    <button className="inputBtn">input</button>
    <span className="lilist">{todoText}</span>
    <a className="lilist">{complete}</a>
  </div>
);

export default SearchViewEntry;

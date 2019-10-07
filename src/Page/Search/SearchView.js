import React from "react";
import SearchViewEntry from "./SearchViewEntry";
import { fakeList } from "../../Component/fakeList";
import { taskList } from "../../Component/realTask";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todoList: fakeList,
      taskList: taskList
    };
    this.searchTodo = this.searchTodo.bind(this);
  }

  searchTodo() {
    const { todoText, todoList } = this.state;
    if (todoText.length === 0) return alert("내용을 입력하세요");
    const searchFilter = [...todoList];
    const filtertodo = searchFilter.filter(item =>
      item.text.includes(todoText)
    );
    this.setState({ todoList: filtertodo });
  }

  onChange(e) {
    this.setState({ todoText: e.target.value });
  }

  render() {
    const { todoText, todoList } = this.state;
    const { onChange, searchTodo } = this;
    return (
      <div className="viewEntry">
        <input
          className="input"
          type="text"
          placeholder="Search Todo"
          value={todoText}
          onChange={onChange}
          onKeyDown={e => (e.keyCode === 13 ? searchTodo() : null)}
        />
        <button className="inputBtn" onClick={() => searchTodo()}>
          input
        </button>
        {todoList
          .filter(item => !item.complete)
          .map(todos => (
            <SearchViewEntry
              text={todos.text}
              complete={todos.complete}
              onChange={onChange}
              search={searchTodo}
              value={todos.id}
              key={todos.id}
            />
          ))}
      </div>
    );
  }
}

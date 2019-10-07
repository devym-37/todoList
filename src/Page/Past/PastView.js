import React from "react";
import PastViewEntry from "./PastViewEntry";
import { fakeList } from "../../Component/fakeList";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todoList: fakeList
    };
  }
  render() {
    const { todoList } = this.state;
    const { onChange, addTodo } = this;
    return (
      <div className="viewEntry">
        {todoList
          .filter(item => item.complete)
          .map(todos => (
            <PastViewEntry
              text={todos.text}
              complete={todos.complete}
              onChange={onChange}
              key={todos.id}
            />
          ))}
      </div>
    );
  }
}

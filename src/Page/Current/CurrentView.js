import React from "react";
import CurrentViewEntry from "./CurrentViewEntry";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "text",
      complete: false,
      todoList: {}
    };
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  addTodo() {
    const { todoText, todoList } = this.state;
    const todos = {
      content: todoText,
      complete: false
    };
    const newTodo = { ...todoList, todos };
    this.setState = newTodo;
  }
  onChange(e) {
    this.setState({ todoText: e.target.value });
  }
  render() {
    const { todoText, complete } = this.state;
    const { onChange, addTodo } = this;
    return (
      <CurrentViewEntry
        text={todoText}
        complete={complete}
        onChange={onChange}
      />
    );
  }
}

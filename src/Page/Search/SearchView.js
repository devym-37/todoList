import React from "react";
import SearchViewEntry from "./SearchViewEntry";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "text",
      complete: false,
      todoList: {}
    };
  }
  onChange(e) {
    this.setState({ todoText: e.target.value });
  }
  render() {
    const { todoText, complete } = this.state;
    const { onChange, addTodo } = this;
    return (
      <SearchViewEntry
        text={todoText}
        complete={complete}
        onChange={onChange}
      />
    );
  }
}

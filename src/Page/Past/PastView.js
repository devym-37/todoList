import React from "react";
import PastViewEntry from "./PastViewEntry";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "text",
      complete: false,
      todoList: {}
    };
  }
  render() {
    const { todoText, complete } = this.state;
    return <PastViewEntry text={todoText} />;
  }
}

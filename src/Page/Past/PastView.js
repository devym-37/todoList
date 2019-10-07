import React from "react";
import PastViewEntry from "./PastViewEntry";
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
    this.returnTodo = this.returnTodo.bind(this);
  }

  returnTodo(list) {
    // const { taskList } = this.state;
    // const reTodo = [...taskList];
    // reTodo[list].complete = !taskList[list].complete;
    // this.setState({ taskList: reTodo });
    const { todoList } = this.state;
    const reTodo = [...todoList];
    reTodo[list].complete = !todoList[list].complete;
    this.setState({ todoList: reTodo });
  }

  render() {
    const { todoList, taskList } = this.state;
    const { returnTodo } = this;
    return (
      <div className="viewEntry">
        {todoList
          .filter(item => item.complete)
          .map(todos => (
            <PastViewEntry
              text={todos.text}
              complete={todos.complete}
              value={todos.id}
              reTodo={returnTodo}
              key={todos.id}
            />
          ))}
      </div>
    );
  }
}

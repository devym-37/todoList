import React from "react";
import CurrentViewEntry from "./CurrentViewEntry";
import { fakeList } from "../../Component/fakeList";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todoList: fakeList
    };
    this.todoslist = this.todoslist.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  todoslist(text) {
    this.setState({
      todoText: ""
    });
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
    const { todoList } = this.state;
    const { onChange, addTodo } = this;
    return (
      <div className="viewEntry">
        <input
          className="input"
          type="text"
          placeholder="New Todo"
          onChange={onChange}
          onChangeText={todoList}
          onKeyDown={e => (e.keyCode === 13 ? addTodo : null)}
        />
        <button className="inputBtn">input</button>
        {todoList.map(todos => (
          <CurrentViewEntry
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

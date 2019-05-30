import React from 'react';
import {data} from './Data';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      taskTodo: data,
      formvalue: ''
    };
  }

  addTask = event => {
    event.preventDefault();
    // debugger;
    const newTask = {
      task: this.state.formvalue,
      id: Date.now(),
      completed: false
    };
    console.log(newTask);
    this.setState({
      taskTodo: [...this.state.taskTodo, newTask],
      formvalue: ''
    });
  };

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.state.taskTodo);
    return (
      <div>
        {this.state.taskTodo.map(element => {
          console.log(element);
          return <Todo taskList={element} />;
        })}
        <TodoForm value={this.state.formvalue} addTheTask={this.addTask} handle={this.handleChanges} />
      </div>
    );
  }
}

export default TodoList;

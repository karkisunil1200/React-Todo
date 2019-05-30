import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: {todo: ['hello', 'world']}
    };
  }

  addToList = e => {
    e.preventDefault();
    this.setState();
  };
  clearList = e => {
    e.preventDefault();
  };

  onInput = e => {
    e.preventDefault();
    this.setState({text: e.tartet.value});
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList task={this.state.todo} />
        <TodoForm addList={this.addToList} clearList={this.clearList} text={this.state.text} />
      </div>
    );
  }
}

export default App;

import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.submit}>
      <input type='text' placeholder='task' value={props.text} />
      <button>Add Todo</button>
      <button onClick={props.clearList}>Clear completed</button>
    </form>
  );
};

export default TodoForm;

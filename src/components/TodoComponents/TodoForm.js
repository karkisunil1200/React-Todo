import React from 'react';

const TodoForm = props => {
  console.log(props);
  return (
    <div className='form'>
      <form onSubmit={props.addTheTask}>
        <input type='text' placeholder='task' value={props.value} onChange={props.handle} name='formvalue' />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;

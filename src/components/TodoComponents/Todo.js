import React from 'react';

const Todo = props => {
  console.log(props);
  return <div className='todo'>{props.taskList.task}</div>;
};

export default Todo;

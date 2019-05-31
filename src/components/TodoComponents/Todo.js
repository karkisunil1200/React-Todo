import React from 'react';

const Todo = props => {
  console.log(props);
  return (
    <div className='todo' onClick={() => props.toggleItem(props.item.id)}>
      {props.taskList.task}
    </div>
  );
};

export default Todo;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// export const data = [
//   {
//     task: 'Organize Garage',
//     id: 01,
//     completed: false
//   },

//   {
//     task: 'Finish Homework',
//     id: 02,
//     completed: false
//   },

//   {
//     task: 'Finish trainingKit',
//     id: 03,
//     completed: false
//   }
// ];

import React from 'react';
import Todo from './Todo';
const TodoList = props => {
  return (
    <ul>
      {props.task.map(prop => (
        <Todo list={prop} />
      ))}
    </ul>
  );
};

export default TodoList;

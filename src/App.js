import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

function App() {
  return (
    <div className='App'>
      <TodoList />
    </div>
  );
}
const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);

export default App;

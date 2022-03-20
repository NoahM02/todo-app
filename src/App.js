import { useReducer, useState } from 'react';
import './App.css';
import ToDo from './ToDo';

export const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
  TOGGLE: 'toggle',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return action.payload.name !== ''
        ? [...todos, newToDo(action.payload.name)]
        : todos;
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.REMOVE:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
  }
}

function newToDo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    setName('');
  }

  return (
    <div className="App">
      <h1>Todo-App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      <div className="todo-area">
        {todos.map((todo) => {
          return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default App;

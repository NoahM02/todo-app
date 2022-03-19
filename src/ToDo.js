import React from 'react';
import { ACTIONS } from './App';

export default function ToDo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button>Delete</button>
    </div>
  );
}

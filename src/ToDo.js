import React from 'react';
import { ACTIONS } from './App';
import { FcCheckmark } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';

export default function ToDo({ todo, dispatch }) {
  function changeDate() {
    let date = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(todo.id);
    return date;
  }

  return (
    <div className="single-todo">
      <span
        className="text"
        style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
      >
        {todo.name}
      </span>
      <span>{changeDate()}</span>
      <FcCheckmark
        className="icons toggle"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      ></FcCheckmark>
      <IoClose
        className="icons delete"
        onClick={() =>
          dispatch({ type: ACTIONS.REMOVE, payload: { id: todo.id } })
        }
      />
    </div>
  );
}

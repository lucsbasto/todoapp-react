/* eslint-disable no-unused-expressions */
import React from 'react';

import './styles.css';

export interface TodoInterface {
  id: string;
  name: string;
}
function Todo({ todo }: { todo: TodoInterface }) {
  return (
    <div className="todo">
      <li>
        <div className="item">{todo.name}</div>
        <div className="buttons">
          <button id="edit">Editar</button>
          <button id="delete">Deletar</button>
        </div>
      </li>
    </div>
  );
}

export default Todo;

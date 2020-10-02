/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCheckBox } from 'react-icons/bs';
import { ImCheckboxUnchecked } from 'react-icons/im';
import './styles.css';

export interface TodoInterface {
  id: string;
  name: string;
  completed: boolean;
}
function Todo({
  todo,
  setTodos,
  todos,
  setToggled,
  toggled,
}: {
  todo: TodoInterface;
  setTodos: any;
  toggled: boolean;
  todos: TodoInterface[];
  setToggled: any;
}): any {
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const completeHandler = () => {
    const completedTodo = todos.filter((e) => e.id === todo.id);
    completedTodo[0].completed = !toggled;
    setToggled(!toggled);
  };

  return (
    <div className="todo">
      <li>
        <div className={todo.completed ? 'completed' : 'item'}>{todo.name}</div>
        <div className="buttons">
          {/* <button id="edit">
            <FiEdit />
          </button> */}
          <button id="delete" onClick={deleteHandler}>
            <FaTrashAlt />
          </button>
          <button id="complete" onClick={completeHandler}>
            {todo.completed ? <BsCheckBox /> : <ImCheckboxUnchecked />}
          </button>
        </div>
      </li>
    </div>
  );
}

export default Todo;

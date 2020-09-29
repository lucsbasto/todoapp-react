/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './styles.css';

function TodoForm(props: any) {
  const [todo, setTodo] = useState('');

  const handleInputChange = (event: any) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: todo,
    });
    setTodo('');
  };

  return (
    <form className="todo-create" onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        value={todo}
        type="text"
        placeholder="Digite um TODO"
        name="todo"
        id="create-todo-input"
      />
      <button onClick={handleSubmit}>Cadastrar</button>
    </form>
  );
}

export default TodoForm;

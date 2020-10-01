import React, { useState } from 'react';
import Todo, { TodoInterface } from '../Todo';
import TodoForm from '../TodoForm';
import TodoImg from '../../assets/todo-image.svg';
import './styles.css';

function TodoList() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [toggled, setToggled] = useState(false);
  const addTodo = (todo: TodoInterface) => {
    if (!todo.name) return;
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <main>
        <div className="todos">
          <ul>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                setToggled={setToggled}
                toggled={toggled}
              />
            ))}
          </ul>
        </div>
        <img src={TodoImg} alt="todo" />
      </main>
    </>
  );
}

export default TodoList;

import React, { useState } from 'react'
import Todo, { TodoInterface } from '../Todo'
import TodoForm from '../TodoForm'
import TodoImg from '../../assets/todo-image.svg'
import './styles.css'

function TodoList() {
  const [todos, setTodos] = useState<TodoInterface[]>([{
    id: '123456',
    name: 'Fazer compras'
  }])

  const addTodo = (todo: TodoInterface) => {
    if (!todo.name) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log("newTodos", newTodos)
    console.log("todos", todos)
  }
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <main>
        <div className="todos">
          <ul>
            <Todo todos={todos} />
          </ul>
        </div>
        <img src={TodoImg} alt="todo" />
      </main>
    </>
  )
}

export default TodoList

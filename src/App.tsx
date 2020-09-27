import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

import './assets/global.css'

function App() {
  return (
    <>
      <Header title='Todo App' />
      <TodoList />
    </>
  );
}

export default App;

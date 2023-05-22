import './App.css';
import TodoList from './TodoList';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Organization List</h1>
      <TodoList />
    </div>
  );
}

export default App;

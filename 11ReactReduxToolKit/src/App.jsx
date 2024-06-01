import { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todo from "./component/Todo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">TodoList</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;

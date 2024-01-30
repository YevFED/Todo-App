import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/todoItem";
import CreateNewTodo from "./components/CreateNewTodo";

function App() {
  const data = [
    {
      title: "Make a bed",
      isCompleted: false,
      _id: "1",
    },
    {
      title: "Make a homework",
      isCompleted: false,
      _id: "2",
    },
    {
      title: "Wash a dish",
      isCompleted: false,
      _id: "3",
    },
  ];

  // Creating a state
  const [todos, setTodos] = useState(data);

  // Changing a list
  const changeTodo = (_id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === _id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  //Deleting Item
  const deleteTodo = (_id) => setTodos([...todos].filter((t) => t._id != _id));

  //Adding new point to list
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
    ]);
  };

  window.addTodo = addTodo;

  return (
    <div className="wrapper">
      <h1 className="pageTitle">
        <span style={{ textTransform: "uppercase" }}>You</span> need to{" "}
        <span>finish</span>
      </h1>

      <CreateNewTodo addTodo={addTodo} />

      {todos.map((todo) => (
        <TodoItem
          data={todo}
          id={todo._id}
          changeTodo={changeTodo}
          isCompleted={todo.isCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;

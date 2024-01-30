import React, { useState } from "react";
import "./CreateTodo.css";
import { BsFillSendPlusFill } from "react-icons/bs";

const CreateNewTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="inputWrapper">
      <input
        className="todoInput"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <BsFillSendPlusFill
        onClick={() => addTodo(title) & setTitle("")}
        className="addIcon"
        size={30}
      />
    </div>
  );
};

export default CreateNewTodo;

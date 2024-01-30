import React from "react";
import "./TodoItem.css";
import { HiOutlineCheck } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ data, id, changeTodo, isCompleted, deleteTodo }) => {
  return (
    <div key={id} className="item">
      <div
        onClick={() => changeTodo(data._id)}
        className={isCompleted ? "completeBorder" : "notCompleted"}
      >
        <HiOutlineCheck className={isCompleted ? "complete" : "notComplete"} />
      </div>

      <p className={isCompleted ? "fTodoTitle" : "todoTitle"}>{data.title}</p>
      <button className="deleteIcon">
        <FaTrashAlt className="icon" onClick={() => deleteTodo(data._id)} />
      </button>
    </div>
  );
};

export default TodoItem;

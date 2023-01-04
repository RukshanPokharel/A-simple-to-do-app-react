import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  return (
    <>
      <div className="todo-item">
        <p className="todo-item-text">{props.toDoItem.toDoText}</p>
        <button
          className="todo-item-dlt"
          onClick={() => props.ItemOnDelete(props.toDoItem.id)} //returning id to parent component where the actual method for delete is.
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ToDoItem;

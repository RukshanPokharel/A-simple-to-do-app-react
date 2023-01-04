import { React, useState } from "react";
import "./ToDoForm.css";
import Button from "./Button";

const ToDoForm = (props) => {
  // storing the value of form input in state
  const [toDoItemName, setToDoItemName] = useState("");

  // when form gets submitted
  const toDoFormHandler = (e) => {
    e.preventDefault();
    const itemToDo = toDoItemName;
    props.onItemAdded(itemToDo);
    setToDoItemName("");
  };

  const itemNameChangeHandler = (e) => {
    setToDoItemName(e.target.value);
  };

  return (
    <>
      <div className="todo-form">
        <form onSubmit={toDoFormHandler}>
          <div className="form-group">
            <label>Item to-do:</label>
            <input
              className="form-control"
              type="text"
              value={toDoItemName}
              onChange={itemNameChangeHandler}
              placeholder="enter item to do"
            ></input>
          </div>
          <Button>Add Item</Button>
          {/* <button className="btn btn-primary" type="submit">
              Add Item
            </button> */}
        </form>
      </div>
    </>
  );
};

export default ToDoForm;

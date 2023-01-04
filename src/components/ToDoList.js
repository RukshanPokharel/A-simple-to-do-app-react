import { React, useState, useCallback } from "react";
import ReactLogo from "../assets/react-logo.png";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  //setting up inital todo data.
  const initialToDoList = [
    {
      id: 1,
      toDoText: "Buy Milk",
    },
    {
      id: 2,
      toDoText: "Buy Biscuits",
    },
    {
      id: 3,
      toDoText: "Buy Chocklates",
    },
  ];
  //using state hook to store the value of todo list.
  const [toDoList, setToDoList] = useState(initialToDoList);
  const [errMsg, setErrMsg] = useState(false);
  const [newItemToDo, setNewItemToDo] = useState({ id: 0, toDoText: "a" });

  // deleting an item from the todo list.
  const ItemOnDeleteHandler = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const displayErrorMsg = () => {
    setErrMsg(true);
    const clearErrorMsgTimer = setTimeout(() => setErrMsg(false), 3000); //using timer to display error msg for only 3 seconds
    return () => clearTimeout(clearErrorMsgTimer);
  };

  // only when new item is added in the todo list this function is recreated in memory else it uses the same old function reference
  const itemAddedHandler = useCallback(() => {
    setToDoList([...toDoList, newItemToDo]);
  }, [newItemToDo, toDoList]);

  const addNewItem = (newItem) => {
    if (!newItem || newItem.trim().length === 0) {
      displayErrorMsg();
      return;
    }
    const newItemToDo = { id: Math.random(), toDoText: newItem };
    setNewItemToDo(newItemToDo);
    // setToDoList([...toDoList, newItemToDo]);
    itemAddedHandler();
  };

  return (
    <div className="todo-box">
      <img className="react-logo" src={ReactLogo} alt="React" />
      <h1 className="header-todo">TO DO LIST</h1>
      <div className="container-todo">
        <div className="list-todo">
          {toDoList.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                toDoItem={item}
                ItemOnDelete={ItemOnDeleteHandler}
              />
            );
          })}
        </div>

        <div className="todoForm">
          <ToDoForm onItemAdded={addNewItem} />
        </div>

        <div className="errormsgToDo">
          {errMsg && <p>You must enter a To Do!</p>}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

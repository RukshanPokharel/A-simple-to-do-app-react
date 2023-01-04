import "./App.css";
import { useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      {/* using react fragment to avoid unnecessary divs */}
      <>
        <ToDoList />
      </>
    </div>
  );
}

export default App;

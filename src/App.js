import "./App.css";
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

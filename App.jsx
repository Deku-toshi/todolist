import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [newTodo , setNewTodo] = useState("");

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

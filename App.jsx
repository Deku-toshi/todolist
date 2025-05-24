import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [newTodo , setNewTodo] = useState("");

  const createTodo = () => {
    const newTask = {id : uuidv4() , content: newTodo}
    setTodos([...todos, newTask])
    setNewTodo("")
  }

  return (
    <>
      <TodoList />
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={createTodo}>追加</button>
      </div>
    </>
  );
}

export default App;

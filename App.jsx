import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";

const todoList = [];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [newTodo , setNewTodo] = useState("");

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const createTodo = () => {
    const newTask = {id : uuidv4() , content: newTodo}
    setTodos([...todos, newTask])
    setNewTodo("")
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          <span>{todo.content}</span>
        </div>
      ))}
      <Form/>
    </>
  );
}

export default App;

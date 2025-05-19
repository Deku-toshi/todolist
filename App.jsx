import { useState } from "react";

const todoList = [];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [newTodo , setNewTodo] = useState("");

  const deleteTodo = () => {
    setTodos(todo => todo.id !== id);
  }

  const createTodo = () => {
    const newTask = {id : Math.floor(Math.random() * 1e5) , content: newTodo}
    setTodos([{...todos, newTask}])
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          <span>{todo.content}</span>
        </div>
      ))}
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={createTodo}>追加</button>
      </div>
    </>
  );
}

export default App;

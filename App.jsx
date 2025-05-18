import { useState } from "react";

const todoList = [];

function App() {
  const [todo, setTodo] = useState(todoList);

  return (
    <>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <button></button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </>
  );
}

export default App;

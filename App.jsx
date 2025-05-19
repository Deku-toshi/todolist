import { useState } from "react";

const todoList = [];

function App() {
  const [todo, setTodo] = useState(todoList);

  return (
    <>
      {todoList.map((todo) => {
        return (
          <>
            <div key={todo.id}>
              <button onClick={deleteTodo}>削除</button>
              <span>{todo.content}</span>
            </div>
          </>
        );
      })}
      <div>
        <input type="text" />
        <button>追加</button>
      </div>
    </>
  );
}

export default App;

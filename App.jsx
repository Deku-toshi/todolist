import { useState } from "react";

const todoList = [];

function App() {
  const [todo, setTodo] = useState(todoList);
  const [newTodo , setNewTodo] = useState("");

  const deleteTodo = () => {

  }

  const addTodo = () => {
    
  }

  const createTodo = () => {
    
  }

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
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} newTodo={addTodo}/>
        <button onClick={createTodo}>追加</button>
      </div>
    </>
  );
}

export default App;

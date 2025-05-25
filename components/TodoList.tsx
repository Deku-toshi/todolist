import { useState } from "react";
import Form from "./Form";
import React from "react";

const TodoList = () => {
  type Todo = {
    id: number,
    content: string,
  };
  
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          <span>{todo.content}</span>
        </div>
      ))}
      <Form todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoList;

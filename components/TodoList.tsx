import { useState } from "react";
import Form from "./Form";
import React from "react";

export type Todo = {
    id: string,
    content: string,
  };

const TodoList = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (id:string) => {
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

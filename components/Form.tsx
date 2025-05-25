import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./TodoList"

type TodoProps = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Form:React.FC<TodoProps> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    const newTask = { id: uuidv4(), content: newTodo };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };
  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo}>追加</button>
    </>
  );
};

export default Form;

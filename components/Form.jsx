import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [newTodo , setNewTodo] = useState("");

  const createTodo = () => {
    const newTask = {id : uuidv4() , content: newTodo}
    setTodos([...todos, newTask])
    setNewTodo("")
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={createTodo}>追加</button>
      </div>
    </>
  );
};

export default Form;

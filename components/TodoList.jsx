const TodoList = () => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          <span>{todo.content}</span>
        </div>
      ))}
    </>
  );
};

export default TodoList;
const Form = () => {
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

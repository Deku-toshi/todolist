import TodoList from "./components/TodoList";

function App() {
  const [newTodo , setNewTodo] = useState("");

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

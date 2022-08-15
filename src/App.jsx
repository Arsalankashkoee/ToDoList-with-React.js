import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="mb-11 text-center text-lg font-bold text-slate-800 ">
        TodoListApp - Arsalan
      </h1>
      <TodoApp />
    </div>
  );
}

export default App;

// TodoApp : todos
// TodoForm => input + button => add todo
// TodoList => todos.map(....)

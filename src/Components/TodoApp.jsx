import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

const TodoApp = () => {
  // state todos
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Modal
  const [show, setShow] = useState(false); // open or close modal
  const [inputValue, setInputValue] = useState(""); //value of input in modal
  // Modal function
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };
  const editTodo = (id) => {
    // console.log(id);
    setShow(true);
    const editText = todos.find((t) => t.id === id);
    // console.log(editText);
    setInputValue(editText.text);
  };
  const updateTitle = (id) => {
    // console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);
    // clone : don't mutate state
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = inputValue;
    // console.log(selectedTodo);
    // clone from all todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    setShow(false);
  };

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);
    // clone : don't mutate state
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    // console.log(selectedTodo);
    // clone from all todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const filterTodos = (status) => {
    // console.log(status);
    switch (status) {
      case "All":
        setFilteredTodos(todos);
        break;
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className=" bg-violet-50 rounded-lg border border-violet-200 shadow-xl p-3 flex flex-col  w-1/2 ">
      <Navbar
        unCompleted={todos.filter((todo) => !todo.isCompleted).length}
        filterTodos={filterTodos}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <TodoForm addTodoHandler={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        show={show}
        setShow={setShow}
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeHandler={changeHandler}
        editTodo={editTodo}
        updateTitle={updateTitle}
      />
    </div>
  );
};

export default TodoApp;

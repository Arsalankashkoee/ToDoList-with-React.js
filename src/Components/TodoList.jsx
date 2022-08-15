// import { useState } from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onEdit,
  show,
  changeHandler,
  editTodo,
  updateTitle,
  setShow,
  inputValue,
  setInputValue,
}) => {
  // const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const renderTodos = () => {
    if (todos.length === 0)
      return (
        <span className="bg-red-200 text-slate-700 p-1 rounded-lg shadow-lg flex items-center justify-center mb-11">
          !! there isn't any todo , add some todo ... !!
        </span>
      );
    return (
      <div className="">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => onEdit(todo.id)}
              show={show}
              setShow={setShow}
              inputValue={inputValue}
              setInputValue={setInputValue}
              changeHandler={changeHandler}
              editTodo={() => editTodo(todo.id)}
              updateTitle={() => updateTitle(todo.id)}
            />
          );
        })}
      </div>
    );
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;

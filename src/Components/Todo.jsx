// import { useState } from "react";
import Modal from "./Modal";

const Todo = ({
  todo,
  onComplete,
  onDelete,
  changeHandler,
  editTodo,
  updateTitle,
  setShow,
  show,
  inputValue,
  setInputValue,
}) => {
  return (
    <div className="bg-white flex items-center justify-between w-full p-2 rounded-lg shadow-xl border border-gray-200 mb-5">
      <p
        className={
          todo.isCompleted ? "line-through text-gray-400" : "text-slate-700"
        }
      >
        {todo.text}
      </p>
      <div className="flex gap-x-5">
        <button
          className="bg-violet-100 rounded-lg py-1 px-3 shadow-md text-violet-600"
          onClick={editTodo}
        >
          edit
        </button>
        {show ? (
          <Modal
            onClose={() => setShow(false)}
            onUpdate={updateTitle}
            changeHandler={changeHandler}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ) : null}
        <button
          className="bg-violet-200 rounded-lg py-1 px-3 shadow-md text-violet-600"
          onClick={onComplete}
        >
          completed
        </button>
        <button
          className="bg-white border border-red-600 rounded-lg py-1 px-3 shadow-md text-red-500"
          onClick={onDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;

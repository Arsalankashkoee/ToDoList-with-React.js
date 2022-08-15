import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo");
      return;
    }
    // add enter todo to todos =>
    props.addTodoHandler(input);
    setInput("");
  };
  return (
    <div className="flex items-center justify-center ">
      <form
        className="bg-white w-full flex justify-between items-center rounded-lg overflow-hidden shadow-lg mb-14  "
        action=""
        onSubmit={submitHandler}
      >
        <input
          className="focus:outline-none px-4 py-1 rounded-lg text-slate-700 flex-1 "
          type="text"
          placeholder="enter your todo ..."
          value={input}
          onChange={changeHandler}
          autoFocus
        />
        <button
          className="bg-violet-300  p-2 text-violet-800 focus:outline-none shadow-lg"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

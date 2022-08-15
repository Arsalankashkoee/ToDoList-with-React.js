// import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const Navbar = ({
  unCompleted,
  filterTodos,
  setSelectedOption,
  selectedOption,
}) => {
  // const [status, setStatus] = useState("All");

  const changeHandler = (e) => {
    //   console.log(e);
    setSelectedOption(e);
    filterTodos(e.value);
  };

  if (!unCompleted) {
    return (
      <h2 className="flex items-center justify-center text-slate-700 mb-9 bg-violet-200 p-2 shadow-lg">
        !!! set your today todos !!!
      </h2>
    );
  }

  return (
    <nav className=" bg-violet-200 mb-7 p-2 rounded-lg shadow-lg  text-slate-700 flex items-center justify-between">
      <h2 className="flex items-center">
        <span className="bg-violet-600 py-1 px-2 rounded-full w-6 h-6 mr-2 text-white flex items-center justify-center">
          {unCompleted}
        </span>
        aren't completed
      </h2>

      <Select
        value={selectedOption}
        onChange={changeHandler}
        options={options}
      />

      {/* <select
        className=""
        name=""
        id=""
        onChange={changeHandler}
        value={status}
      >
        <option value="All" className="">
          All
        </option>
        <option value="Completed" className="">
          Completed
        </option>
        <option value="Uncompleted" className="">
          Uncompleted
        </option>
      </select> */}
    </nav>
  );
};

export default Navbar;
